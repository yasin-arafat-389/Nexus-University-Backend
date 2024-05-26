/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    success: false,
    message: 'Something went wrong!!',
    error: err.message,
  });
});

// Catch all middleware for handling undefined routes
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
