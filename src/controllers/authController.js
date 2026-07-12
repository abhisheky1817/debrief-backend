import { signupService, signinService } from "../services/authService.js";

export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const result = await signupService({ name, email, password });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await signinService({ email, password });
    res.status(200).json({
      success: true,
      message: "User signed in successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: {
        user: {
          id: req.user.id,
          name: req.user.name,
          email: req.user.email,
          avatar: req.user.avatar,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};