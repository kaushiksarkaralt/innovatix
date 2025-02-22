import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { COOKIE_OPTIONS } from "../constants.js";

const signup = asyncHandler(async (req, res) => {
  const { email, firstName, lastName, username, type, password } = req.body;

  // Check if all fields are provided
  if (
    [email, firstName, lastName, username, type, password].some(
      (field) => !field?.trim()
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }
  if (!["innovator", "developer", "business"].includes(type.toLowerCase())) {
    throw new ApiError(400, "Invalid type");
  }

  // Check if user already exists
  const userExists = await User.findOne({ $or: [{ email }, { username }] });
  if (userExists) {
    throw new ApiError(400, "User already exists");
  }

  // Create user
  const user = await User.create({
    email,
    firstName,
    lastName,
    username,
    type,
    password,
  });

  // Generate token
  const token = user.generateToken();

  return res
    .cookie("token", token, COOKIE_OPTIONS)
    .status(201)
    .json(new ApiResponse(201, { token }, "User created"));
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if ([email, password].some((field) => !field?.trim())) {
    throw new ApiError(400, "Email and password are required");
  }

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password)) {
    throw new ApiError(401, "Invalid credentials");
  }

  // Generate token
  const token = user.generateToken();

  return res
    .cookie("token", token, COOKIE_OPTIONS)
    .status(200)
    .json(new ApiResponse(200, { token }, "Login successful"));
});

const getUser = asyncHandler((req, res) => {
  return res
    .status(200)
    .json(
      new ApiResponse(200, { user: req.user }, "User fetched successfully")
    );
});

const logout = asyncHandler((req, res) => {
  return res
    .clearCookie("token")
    .status(200)
    .json(new ApiResponse(200, {}, "Logout successful"));
});

export { signup, login, getUser, logout };
