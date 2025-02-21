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

export { signup };
