/* eslint-disable no-trailing-spaces, no-multiple-empty-lines, eol-last */
import { PrismaClient } from '@prisma/client'
import config from '../utils/config'

/**
 * Creates a properly configured Prisma client for any environment
 *
 * @param connectionUrl - Database connection URL (defaults to config.DATABASE_URL)
 * @returns A configured PrismaClient instance
 */
export function createPrismaClient(connectionUrl = config.DATABASE_URL): PrismaClient {
  // Create a new Prisma client with the provided connection URL
  return new PrismaClient({
    datasources: { db: { url: connectionUrl } },
  })
}

/**
 * Next.js-specific Prisma client singleton
 *
 * Uses the globally scoped pattern recommended by Prisma for Next.js
 * applications to prevent multiple instances during hot reloading.
 */

// Define global type for Prisma instance
declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var prisma: PrismaClient | undefined // eslint-disable-line no-unused-vars
}

// Create or reuse a Prisma client instance
const prisma = global.prisma || createPrismaClient()

// Save to global in development to prevent multiple instances
if (config.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma
