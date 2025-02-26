import { isValidObjectId } from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Reply } from "../models/reply.model.js";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createReply = asyncHandler(async (req, res) => {
  const { commentID } = req.params;

  if (!isValidObjectId(commentID)) {
    throw new ApiError(400, "Invalid comment ID");
  }
  const { reply } = req.body;
  if (!reply?.trim()) {
    throw new ApiError(400, "Reply is required");
  }

  const comment = await Comment.findById(commentID);
  if (!comment) {
    throw new ApiError(404, "Comment not found");
  }

  const newReply = await Reply.create({
    reply: reply,
    commentID: commentID,
    owner: req.user._id,
  });

  return res.status(200).json(new ApiResponse(200, { newReply }));
});

const getReplies = asyncHandler(async (req, res) => {
  const { commentID } = req.params;

  if (!isValidObjectId(commentID)) {
    throw new ApiError(400, "Invalid comment ID");
  }

  const comment = await Comment.findById(commentID);
  if (!comment) {
    throw new ApiError(404, "Comment not found");
  }

  const replies = await Reply.find({
    commentID,
  }).populate("owner", "username");

  return res.status(200).json(new ApiResponse(200, { replies }));
});

export { createReply, getReplies };