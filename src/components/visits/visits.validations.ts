import { Joi, Segments } from 'celebrate';
import { IValidation } from '@models/interfaces';

const validation: IValidation = {
  add: {
    [Segments.BODY]: Joi.object().keys({
      datetime: Joi.date().required(),
      clinicId: Joi.string().required(),
      personId: Joi.string().required(),
      serviceId: Joi.string().required(),
    }),
  },
  patch: {
    [Segments.BODY]: Joi.object().keys({
      datetime: Joi.date(),
      clinicId: Joi.string(),
      personId: Joi.string(),
      serviceId: Joi.string(),
    }),
  },
};

export default validation;
