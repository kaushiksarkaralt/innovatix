import mongoose, { isValidObjectId } from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Project } from "../models/project.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Innovation } from "../models/innovation.model.js";

const createProject = asyncHandler(async (req, res) => {
  const { title, repo, tags = [], technologies = [], innovationID } = req.body;
  const owner = req.user._id;

  if ([title, repo, innovationID].some((arg) => !arg?.trim())) {
    throw new ApiError(400, "Missing required fields");
  }

  if (!Array.isArray(tags) || !Array.isArray(technologies)) {
    throw new ApiError(400, "Tags and Technologies must be arrays");
  }

  // GET READY FOR SOME REGEXXXXXXXXXXXX RAHHHHHHHH
  const githubRepoRegex =
    /^(https?:\/\/)?(www\.)?github\.com\/[\w-]+\/[\w-]+(\.git)?(\/.*)?$/;
  if (!githubRepoRegex.test(repo)) {
    throw new ApiError(400, "Invalid GitHub Repository URL");
  }

  if (!isValidObjectId(innovationID)) {
    throw new ApiError(400, "Invalid Innovation ID");
  }

  const innovation = await Innovation.findById(innovationID);
  if (!innovation) {
    throw new ApiError(404, "Innovation not found");
  }

  const project = await Project.create({
    title,
    repo,
    owner,
    tags,
    technologies,
    innovationID,
  });

  res.status(201).json(new ApiResponse(201, { project }, "Project created"));
});

const getAllProjects = asyncHandler(async (req, res) => {
  //TODO: Add pagination
  //TODO: sort by date, likes, comments
  const projects = await Project.aggregate([
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "projectID",
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
        foreignField: "projectID",
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
        isMember: {
          $in: [req.user._id, "$members"],
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

  res
    .status(200)
    .json(new ApiResponse(200, { projects }, "All projects fetched"));
});

const getProjectById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid Project ID");
  }

  const project = await Project.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "projectID",
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
        foreignField: "projectID",
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
        isMember: {
          $in: [req.user._id, "$members"],
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

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  res.status(200).json(new ApiResponse(200, { project }, "Project fetched"));
});

const updateProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, repo, tags, technologies } = req.body;

  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid Project ID");
  }

  const project = await Project.findById(id);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  if (title?.trim()) project.title = title;
  if (repo?.trim()) project.repo = repo;
  if (Array.isArray(tags)) project.tags = tags;
  if (Array.isArray(technologies)) project.technologies = technologies;

  await project.save();

  res.status(200).json(new ApiResponse(200, { project }, "Project updated"));
});

const deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid Project ID");
  }

  const project = await Project.findById(id);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  if (project.owner.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to delete this project");
  }

  //TODO: delete likes, comments, replies.

  await Project.findByIdAndDelete(id);

  res.status(200).json(new ApiResponse(200, {}, "Project deleted"));
});

const joinProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid Project ID");
  }

  const project = await Project.findById(id);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  if (project.owner.toString() === req.user._id.toString()) {
    throw new ApiError(403, "You are the owner of this project");
  }

  if (project.members.includes(req.user._id)) {
    throw new ApiError(400, "You are already a member of this project");
  }

  project.members.push(req.user._id);
  await project.save();

  res.status(200).json(new ApiResponse(200, { project }, "Joined project"));
});

const leaveProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid Project ID");
  }

  const project = await Project.findById(id);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  if (project.owner.toString() === req.user._id.toString()) {
    throw new ApiError(403, "You are the owner of this project");
  }

  if (!project.members.includes(req.user._id)) {
    throw new ApiError(400, "You are not a member of this project");
  }

  project.members = project.members.filter(
    (member) => member.toString() !== req.user._id.toString()
  );
  await project.save();

  res.status(200).json(new ApiResponse(200, { project }, "Left project"));
});

export {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  joinProject,
  leaveProject,
};
