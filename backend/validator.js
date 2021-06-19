const Joi = require("@hapi/joi");

const validator = (data) => {
  const schema = Joi.object({
    firstName: Joi.allow(String).optional(),
    surname: Joi.allow(String).optional(),
    company: Joi.allow(String).optional(),
    jobTitle: Joi.allow(String).optional(),
    email: Joi.allow(String).optional(),
    countryCode: Joi.allow(String).required(),
    phone: Joi.allow(Array).required(),
    notes: Joi.allow(String),
  });
  return schema.validate(data);
};

module.exports = validator;
