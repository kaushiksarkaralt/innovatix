import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
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
    },
    commentID: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  },
  { timestamps: true }
);

export const Like = mongoose.model("Like", likeSchema);
