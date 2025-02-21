import mongoose, { Schema } from "mongoose";

const chatMessageSchema = new Schema(
  {
    chatID: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ChatMessage = mongoose.model("ChatMessage", chatMessageSchema);
