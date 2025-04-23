/**
 * @jest-environment node
 */
import { NextApiRequest, NextApiResponse } from 'next'

import helloHandler from '../pages/api/hello'

function mockReq(): NextApiRequest {
  return {} as NextApiRequest
}

function mockRes() {
  const res: Partial<NextApiResponse> & {
    _json?: any
    _ended?: boolean
  } = {}
  res.status = function (code: number) {
    // @ts-ignore
    this.statusCode = code
    return this
  }
  res.json = function (data: any) {
    // @ts-ignore
    this._json = data
    return this
  }
  res.end = function () {
    // @ts-ignore
    this._ended = true
    return this
  }
  return res as NextApiResponse & { _json?: any; _ended?: boolean }
}

describe('Hello API Route', () => {
  test('responds with JSON containing name', () => {
    const req = mockReq()
    const res = mockRes()
    helloHandler(req, res)
    // @ts-ignore
    expect(res.statusCode).toBe(200)
    // @ts-ignore
    expect(res._json).toEqual({ name: 'John Doe' })
  })
})

describe('Emails API Route', () => {
  afterEach(() => {
    delete process.env.TEST_MODE
    // clear test emails
    delete (global as any).TEST_EMAILS
  })

  test('returns 404 when not in test mode', async () => {
    process.env.TEST_MODE = 'false'
    jest.resetModules()
    const { default: emailsHandler } = await import('../pages/api/test/emails')
    const req = mockReq()
    const res = mockRes()
    emailsHandler(req, res)
    // @ts-ignore
    expect(res.statusCode).toBe(404)
    // @ts-ignore
    expect(res._json).toEqual({ error: 'Not found' })
  })

  test('returns stored emails when in test mode', async () => {
    process.env.TEST_MODE = 'true'
    ;(global as any).TEST_EMAILS = [{ identifier: 'a', url: 'b' }]
    jest.resetModules()
    const { default: emailsHandler } = await import('../pages/api/test/emails')
    const req = mockReq()
    const res = mockRes()
    emailsHandler(req, res)
    // @ts-ignore
    expect(res.statusCode).toBe(200)
    // @ts-ignore
    expect(res._json).toEqual([{ identifier: 'a', url: 'b' }])
  })

  test('deletes emails on DELETE request', async () => {
    process.env.TEST_MODE = 'true'
    ;(global as any).TEST_EMAILS = [{ identifier: 'x', url: 'y' }]
    jest.resetModules()
    const { default: emailsHandler } = await import('../pages/api/test/emails')
    const req = Object.assign(mockReq(), { method: 'DELETE' })
    const res = mockRes()
    emailsHandler(req, res)
    // @ts-ignore
    expect(res.statusCode).toBe(204)
    expect((global as any).TEST_EMAILS).toEqual([])
  })
})