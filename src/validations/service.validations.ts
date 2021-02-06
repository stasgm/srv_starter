import { Joi, Segments } from 'celebrate'

export default {
  add: {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      duration: Joi.string().required(),
    }),
  },
  patch: {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string(),
      duration: Joi.string(),
    }),
  }
};
