import { Joi, Segments } from 'celebrate'

export default {
  add: {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      address: Joi.string(),
    }),
  },
  patch: {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string(),
      address: Joi.string(),
    }),
  }
};
