import { asyncHandler } from "../utils/asyncHandler.js";
import { Innovation } from "../models/innovation.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { isValidObjectId } from "mongoose";

// TODO: implement a controller to enhance the innovation using gemini ai

const createInnovation = asyncHandler(async (req, res) => {
  const { title, description, tags } = req.body;

  // Check if all fields are provided
  if ([title, description].some((field) => !field?.trim())) {
    throw new ApiError(400, "All fields are required");
  }

  const data = {
    owner: req.user._id,
    title,
    description,
  };

  // Ensure tags is an array
  if (tags) {
    if (!Array.isArray(tags)) {
      throw new ApiError(400, "Tags must be an array");
    }
    data.tags = tags;
  }

  // Create innovation
  const innovation = await Innovation.create(data);

  return res
    .status(201)
    .json(new ApiResponse(201, innovation, "Innovation created"));
});

const getAllInnovations = asyncHandler(async (req, res) => {
  //TODO: pagination
  //TODO: fill likes, owner, comments
  //TODO: Add flag if user is a member/owner of the project
  const innovations = await Innovation.find({});

  return res
    .status(200)
    .json(new ApiResponse(200, innovations, "Fetheched all innovations"));
});

const getInnovationByID = asyncHandler(async (req, res) => {
  const { id } = req.params;
  //TODO: fill likes, owner, comments
  //TODO: Add flag if user is a member/owner of the project


  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid Innovation ID");
  }
  const innovation = await Innovation.findById(id)
    .populate("owner", "name username email")
    .exec();

  if (!innovation) {
    throw new ApiError(404, "Innovation not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, innovation, "Fetched innovation"));
});

const getInnovationByText = asyncHandler(async (req, res) => {
  const { text } = req.body;
  //TODO: pagination
  //TODO: fill likes, owner, comments
  //TODO: Add flag if user is a member/owner of the project


  const innovations = await Innovation.find({
    $text: { $search: text },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, innovations, "Fetched innovations"));
});

const updateInnovation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, tags } = req.body;

  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid Innovation ID");
  }

  const innovation = await Innovation.findById(id);

  if (!innovation) {
    throw new ApiError(404, "Innovation not found");
  }

  if (innovation.owner.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to update this innovation");
  }

  if (title?.trim()) innovation.title = title;
  if (description?.trim()) innovation.description = description;
  if (isArray(tags)) innovation.tags = tags;

  await innovation.save();

  return res
    .status(200)
    .json(new ApiResponse(200, innovation, "Innovation updated"));
});

export {
  createInnovation,
  getAllInnovations,
  getInnovationByID,
  getInnovationByText,
  updateInnovation,
};
