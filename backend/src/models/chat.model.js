import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema(
  {
    people: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const Chat = mongoose.model("Chat", chatSchema);
