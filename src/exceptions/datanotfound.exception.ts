import { ApplicationException } from './application.exception';

/**
 * Exception when we can't find data for a database request
 * (mongoose return null value)
 */
export class DataNotFoundException extends ApplicationException {
  /**
   * Exception constructor
   * @param context Request context and more details
   */
  constructor(context: string) {
    super('DocumentNotFoundException', 404, `Bad Request : data not found - ${context}`);
  }
}
