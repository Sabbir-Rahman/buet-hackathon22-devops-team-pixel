import logger from './deafultLogger'

export const logGeneralInfo = (
  serviceName: string,
  file: string,
  method: string,
  message: string
): void => {
  logger.info(
    `service: ${serviceName} | file: ${file} | method: ${method} | message: ${message}`
  )
}

export const logGeneralError = (
  serviceName: string,
  file: string,
  method: string,
  message: string
): void => {
  logger.error(
    `service: ${serviceName} | file: ${file} | method: ${method} | message: ${message}`
  )
}
