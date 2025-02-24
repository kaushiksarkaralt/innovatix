import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    repo: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
    innovationID: {
      type: Schema.Types.ObjectId,
      ref: "Innovation",
      required: true,
    },
  },
  { timestamps: true }
);

projectSchema.index({ title: "text", tags: "text", technologies: "text" });

export const Project = mongoose.model("Project", projectSchema);
