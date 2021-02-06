import express, { Express } from 'express';
import log from '@logger';
import { IndexRoute } from './routes/v1/';
import environnement from '@config/environnement';
import { expressLoader } from '@config/loaders';
import errorHandler from '@middleware/errorHandler';

class App {
  private readonly app: Express;
  private indexRoute!: IndexRoute;

  constructor() {
    this.app = express(); // create expressjs application
    this.config(); // configure application
    this.indexRoute = new IndexRoute(); //add routes handlers
    this.routes(); // set routes
    this.listen(); // start server
  }

  public config() {
    expressLoader(this.app);
  }
  /**
   * @return Express application
   */
  public getApp(): Express {
    return this.app;
  }

  /**
   * Start application server
   */
  private listen(): void {
    const server = this.app.listen(environnement.PORT, () => {
      log.info(`Started on http://${environnement.API_URL}:${environnement.PORT}`);
    });

    process.on('SIGTERM', () => {
      server.close(() => {
        console.log('Process terminated');
      });
    });
  }

  /**
   * Define Routes and error handling middleware
   */
  private routes(): void {
    // Routes middleware
    this.app.use('/api/v1/', this.indexRoute.getApi());
    // Error handler middleware
    this.app.use(errorHandler);
  }
}

export default App;
