import { Joi, Segments } from 'celebrate';
import { IValidation } from '@models/interfaces';

const validation: IValidation = {
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
  },
};

export default validation;
