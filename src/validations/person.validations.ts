import { Joi, Segments } from 'celebrate'

export default {
  add: {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      phone: Joi.string(),
    }),
  },
  patch: {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string(),
      phone: Joi.string(),
    }),
  }
};
