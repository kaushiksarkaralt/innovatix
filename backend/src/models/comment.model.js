import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    projectID: {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
    innovationID: {
      type: Schema.Types.ObjectId,
      ref: "Innovation",
      index: true,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);
