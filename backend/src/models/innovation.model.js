import mongoose, { Schema } from "mongoose";

const innovationSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [
      {
        type: String,
        unique: true,
        trim: true,
      },
    ],
  },
  { timestamps: true }
);

innovationSchema.index({ title: "text", description: "text", tags: "text" });

export const Innovation = mongoose.model("Innovation", innovationSchema);
