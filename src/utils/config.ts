import dotenv from 'dotenv'
// Import package.json directly
// eslint-disable-next-line import/extensions
import packageJson from '../../package.json'

// Required environment variables
const required = {
  DATABASE_URL: '',
}

const NODE_ENV = process.env.NODE_ENV ?? 'development'

// Always load dotenv, preferring .env.development if NODE_ENV is development
if (typeof window === 'undefined') {
  dotenv.config({ path: `.env.${NODE_ENV}` })
  dotenv.config({ path: '.env.local' })

  for (const key in required) {
    const envKey = key as keyof typeof required
    const value = process.env[envKey]
    if (!value) {
      throw `Missing required environment variable: ${envKey}`
    }
    required[envKey] = value
  }
}

// Optional environment variables with defaults
const env = {
  PORT: '3000',
  CI: 'false',
}

for (const key in env) {
  const envKey = key as keyof typeof env
  const value = process.env[envKey]
  if (value) {
    env[envKey] = value
  }
}

// Use values directly from package.json
const config = {
  NODE_ENV,
  NEXT_PUBLIC_APP_NAME: packageJson.name,
  NEXT_PUBLIC_APP_VERSION: packageJson.version,
  ...env,
  ...required,
}

export default config
