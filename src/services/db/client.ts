import { PrismaClient } from '@prisma/client'
import config from '@/src/utils/config'

/**
 * Test-friendly Prisma client implementation
 *
 * This implementation provides direct configuration of connection strings. It's particularly useful for:
 *
 * 1. Test environments that run outside the Next.js runtime
 * 2. Scenarios requiring custom database configurations
 * 3. Services that need consistent database connections across different environments
 */

const prisma = new PrismaClient({
  datasources: { db: { url: config.DATABASE_URL } },
})

export default prisma
