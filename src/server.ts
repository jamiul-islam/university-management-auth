import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, infoLogger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string)
    infoLogger.info(`🛢️ database connected successful`)

    app.listen(config.port, () => {
      infoLogger.info(`Application app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(`connection failed`, error)
  }
}
main()
