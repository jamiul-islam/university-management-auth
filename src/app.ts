import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

app.use(cors());
app.use(cookieParser());

// parse application/json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// application routes
app.use('/api/v1/', routes);

// testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to University Management Application API');
});

// handle api not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: false,
    message: 'not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  });
  next();
});

// global error handler
app.use(globalErrorHandler);

export default app;
