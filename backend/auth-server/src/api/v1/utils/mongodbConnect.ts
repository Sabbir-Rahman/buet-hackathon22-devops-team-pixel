import mongoose from 'mongoose'
import config from 'config'
import logger from '../../../../logger/deafultLogger'

async function connect() {
  const dbUri = config.get<string>('MONGODB_CONNECTION_URL')

  try {
    await mongoose.connect(dbUri)
    logger.info('Database connected')
  } catch (error) {
    logger.info(error)
    logger.error('Could not connect to db')
    process.exit(1)
  }
}

export default connect
