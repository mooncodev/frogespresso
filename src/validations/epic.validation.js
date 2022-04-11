const Joi = require('joi');

const createEpic = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    img: Joi.array().required(), //.valid([1,2,3,5,8,13,21,34])
    description: Joi.string().required(),
    getInvolved: Joi.string().required(),
    sizeRating: Joi.number().required(),
    tasks: Joi.array().required(),
    progress: Joi.number().required(),
  }),
};

module.exports = {
  createEpic,
};
