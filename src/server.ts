import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, infoLogger } from './shared/logger'

// handle uncaught exception
process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string)
    infoLogger.info(`🛢️ database connected successful`)

    server = app.listen(config.port, () => {
      infoLogger.info(`Application app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(`connection failed`, error)
  }

  // handle unhandled rejection
  process.on('unhandledRejection', error => {
    if (server) {
      errorLogger.error(error)
    }
    process.exit(1)
  })
}
main()

// handle SIGTERM
process.on('SIGTERM', () => {
  infoLogger.info('SIGTERM received, shutting down gracefully')
  if (server) {
    server.close(() => {
      infoLogger.info('Process terminated!')
    })
  }
})
