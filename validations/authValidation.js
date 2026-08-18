import Joi from "joi";

export const registerSchema = Joi.object({

  name: Joi.string()
    .trim()
    .min(3)
    .max(15)
    .pattern(/^[A-Za-z0-9 ]+$/)
    .required(),

  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(6)
    .pattern(/^\S+$/)
    .required()

});