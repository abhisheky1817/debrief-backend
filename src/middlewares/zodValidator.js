import AppError from "../utils/errors/appError.js";

const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const errorMessages = result.error.errors.map((e) => e.message).join(", ");
    return next(new AppError(errorMessages, 400));
  }
  req.body = result.data;
  next();
};

export default validate;