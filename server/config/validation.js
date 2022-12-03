const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(255).required("Name is required"),
    email: Joi.string().min(6).max(255).required("Email is required").email(),
    password: Joi.string().min(6).max(255).required("Password is required"),
    role: Joi.string().required().valid("student", "instructor"),
  });

  return schema.validate(data);
};

const updateProfileValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(255).required("Name is required"),
    email: Joi.string().min(6).max(255).required("Email is required").email(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  console.log(data);
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });

  return schema.validate(data);
};

const passwordValidation = (data) => {
  const schema = Joi.object({
    password: Joi.string().min(6).max(255).required("Password is required"),
  });

  return schema.validate(data);
};

module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
module.exports.updateProfileValidation = updateProfileValidation;
module.exports.passwordValidation = passwordValidation;
