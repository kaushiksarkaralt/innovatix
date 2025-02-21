import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const signup = asyncHandler(async (req, res) => {
  const { email, firstName, lastName, username, type, password } = req.body;

  if (
    [email, firstName, lastName, username, type, password].some(
      (field) => !field?.trim()
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const userExists = await User.findOne({ $or: [{ email }, { username }] });
  if (userExists) {
    throw new ApiError(400, "User already exists");
  }
});

export { signup };
