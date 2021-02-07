import { Joi, Segments } from 'celebrate';
import { IValidation } from '@models/interfaces';

const validation: IValidation = {
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
  },
};

export default validation;
