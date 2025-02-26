import { isValidObjectId } from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Comment } from "../models/comment.model.js";
import { Innovation } from "../models/innovation.model.js";
import { Project } from "../models/project.model.js";

// TODO get replies too

const getInnovationComments = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid innovation ID");
  }

  const innovation = await Innovation.findById(id);
  if (!innovation) {
    throw new ApiError(404, "Innovation not found");
  }

  const comments = await Comment.find({ innovationID: id }).populate(
    "owner",
    "username email"
  );
  res.status(200).json(new ApiResponse(200, { comments }));
});

const getProjectComments = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid project ID");
  }

  const project = await Project.findById(id);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  const comments = await Comment.find({ projectID: id }).populate(
    "owner",
    "username email"
  );
  res.status(200).json(new ApiResponse(200, { comments }));
});

const createInnovationComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid innovation ID");
  }

  const innovation = await Innovation.findById(id);
  if (!innovation) {
    throw new ApiError(404, "Innovation not found");
  }

  const { comment } = req.body;
  if (!comment?.trim()) {
    throw new ApiError(400, "Comment is required");
  }

  const newComment = await Comment.create({
    owner: req.user._id,
    innovationID: id,
    comment,
  });
  res.status(200).json(new ApiResponse(200, { comment: newComment }));
});

const createProjectComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid project ID");
  }

  const project = await Project.findById(id);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  const { comment } = req.body;
  if (!comment?.trim()) {
    throw new ApiError(400, "Comment is required");
  }

  const newComment = await Comment.create({
    owner: req.user._id,
    projectID: id,
    comment,
  });
  res.status(200).json(new ApiResponse(200, { comment: newComment }));
});

export {
  getInnovationComments,
  getProjectComments,
  createInnovationComment,
  createProjectComment,
};
