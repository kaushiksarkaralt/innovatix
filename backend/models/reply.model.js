import mongoose, { Schema } from "mongoose";

const replySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commentID: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      required: true,
    },
    reply: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Reply = mongoose.model("Reply", replySchema);
