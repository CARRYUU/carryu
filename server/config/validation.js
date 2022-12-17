const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(255).required("Name is required"),
    email: Joi.string().min(6).max(255).required("Email is required").email(),
    password: Joi.string().min(6).max(255).required("Password is required"),
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

const courseValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(255).required("Title is required"),
    price: Joi.number().required("Price is required"),
    category: Joi.string()
      .required("Category is required")
      .valid(
        "web-development",
        "programming-language",
        "finance",
        "it-and-software",
        "art-design",
        "music",
        "system-design",
        "music",
        "marketing",
        "others"
      ),
  });

  return schema.validate(data);
};

module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
module.exports.updateProfileValidation = updateProfileValidation;
module.exports.passwordValidation = passwordValidation;
module.exports.courseValidation = courseValidation;
