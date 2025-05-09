import { PrismaClient } from '@prisma/client'
import config from '@/src/utils/config'

const globalForPrisma = global as unknown as { prisma?: PrismaClient }

const url = config.DATABASE_URL

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: { db: { url } },
    log: ['query', 'info', 'warn', 'error'],
  })

if (config.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
