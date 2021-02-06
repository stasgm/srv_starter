import 'module-alias/register';
import App from './app';
import log from '@logger';

try {
  new App();
} catch (e) {
  log.error(e);
}
