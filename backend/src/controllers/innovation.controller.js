import { asyncHandler } from "../utils/asyncHandler.js";
import { Innovation } from "../models/innovation.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose, { isValidObjectId } from "mongoose";

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
  const innovations = await Innovation.aggregate([
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "innovationID",
        as: "likes",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "owner",
        foreignField: "_id",
        as: "owner",
        pipeline: [
          {
            $project: {
              username: 1,
              email: 1,
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "innovationID",
        as: "comments",
      },
    },
    {
      $addFields: {
        likesCount: {
          $size: "$likes",
        },
        commentsCount: {
          $size: "$comments",
        },
        owner: {
          $first: "$owner",
        },
      },
    },
    {
      $addFields: {
        isOwner: {
          $eq: [{ $toString: "$owner._id" }, { $toString: req.user._id }],
        },
      },
    },
    {
      $project: {
        likes: 0,
        comments: 0,
      },
    },
  ]);

  return res
    .status(200)
    .json(new ApiResponse(200, innovations, "Fetheched all innovations"));
});

const getInnovationByID = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid Innovation ID");
  }

  const innovation = await Innovation.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "innovationID",
        as: "likes",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "owner",
        foreignField: "_id",
        as: "owner",
        pipeline: [
          {
            $project: {
              username: 1,
              email: 1,
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "innovationID",
        as: "comments",
      },
    },
    {
      $addFields: {
        likesCount: {
          $size: "$likes",
        },
        commentsCount: {
          $size: "$comments",
        },
        owner: {
          $first: "$owner",
        },
      },
    },
    {
      $addFields: {
        isOwner: {
          $eq: [{ $toString: "$owner._id" }, { $toString: req.user._id }],
        },
      },
    },
    {
      $project: {
        likes: 0,
        comments: 0,
      },
    },
  ]);

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

  if (!text?.trim()) {
    throw new ApiError(400, "Text is required");
  }

  const innovations = await Innovation.aggregate([
    {
      $match:{
        $text: {
          $search: text,
        },
      }
    },
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "innovationID",
        as: "likes",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "owner",
        foreignField: "_id",
        as: "owner",
        pipeline: [
          {
            $project: {
              username: 1,
              email: 1,
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "innovationID",
        as: "comments",
      },
    },
    {
      $addFields: {
        likesCount: {
          $size: "$likes",
        },
        commentsCount: {
          $size: "$comments",
        },
        owner: {
          $first: "$owner",
        },
      },
    },
    {
      $addFields: {
        isOwner: {
          $eq: [{ $toString: "$owner._id" }, { $toString: req.user._id }],
        },
      },
    },
    {
      $project: {
        likes: 0,
        comments: 0,
      },
    },
  ]);

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
