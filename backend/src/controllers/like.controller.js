import { isValidObjectId } from "mongoose";
import { Innovation } from "../models/innovation.model.js";
import { Like } from "../models/like.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Project } from "../models/project.model.js";

const toggleInnovationLike = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid Innovation ID");
  }

  const innovation = await Innovation.findById(id);
  if (!innovation) {
    throw new ApiError(404, "Innovation not found");
  }

  const like = await Like.findOne({ innovationID: id, owner: req.user._id });

  let dislike = false;

  if (like) {
    await Like.findByIdAndDelete(like._id);
    dislike = true;
  } else {
    await Like.create({ innovationID: id, owner: req.user._id });
  }

  res
    .status(200)
    .json(new ApiResponse(200, {}, dislike ? "Disliked" : "Liked"));
});

const toggleProjectLike = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid Project ID");
  }

  const project = await Project.findById(id);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  const like = await Like.findOne({ projectID: id, owner: req.user._id });

  let dislike = false;

  if (like) {
    await Like.findByIdAndDelete(like._id);
    dislike = true;
  } else {
    await Like.create({ projectID: id, owner: req.user._id });
  }

  res
    .status(200)
    .json(new ApiResponse(200, {}, dislike ? "Disliked" : "Liked"));
});

export { toggleInnovationLike, toggleProjectLike };
