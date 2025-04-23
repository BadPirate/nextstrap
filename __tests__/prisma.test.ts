/**
 * @jest-environment node
 */
describe('Prisma client module', () => {
  afterEach(() => {
    // Reset global prisma stub and module registry
    delete (global as any).prisma
    jest.resetModules()
  })

  test('initializes a new PrismaClient when none exists', async () => {
    jest.resetModules()
    const module = await import('../src/lib/prisma')
    const prisma = module.default
    expect(prisma).toBeDefined()
    expect(typeof prisma.$disconnect).toBe('function')
  })

  test('returns existing global.prisma when defined', async () => {
    const stub = { foo: 'bar' }
    ;(global as any).prisma = stub
    jest.resetModules()
    const module = await import('../src/lib/prisma')
    expect(module.default).toBe(stub)
  })
})