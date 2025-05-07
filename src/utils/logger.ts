/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
import config from './config'

// For NextJS app only, use this in place of console.log, won't show logs in production client side
const enabled = config.NODE_ENV !== 'production' && typeof window === 'undefined'

const logger = {
  debug: (...args: any[]) => {
    if (enabled) {
      console.debug(...args)
    }
  },
  info: (...args: any[]) => {
    if (enabled) {
      console.info(...args)
    }
  },
  log: (...args: any[]) => {
    if (enabled) {
      console.log(...args)
    }
  },
  error: (...args: any[]) => {
    if (enabled) {
      console.error(...args)
    }
  },
  warn: (...args: any[]) => {
    if (enabled) {
      console.warn(...args)
    }
  },
}

export default logger
