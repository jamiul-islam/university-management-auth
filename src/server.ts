/* eslint-disable no-console */
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';

// handle uncaught exception
process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    console.log(`🛢️ database connected successful`);

    server = app.listen(config.port, () => {
      console.log(`Application app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(`connection failed`, error);
  }

  // handle unhandled rejection
  process.on('unhandledRejection', error => {
    if (server) {
      console.log(error);
    }
    process.exit(1);
  });
}
main();

// handle SIGTERM
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  if (server) {
    server.close(() => {
      console.log('Process terminated!');
    });
  }
});
