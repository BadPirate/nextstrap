import { HttpLink, HttpOptions } from '@apollo/client'
import { logDebug } from '../logging'

let call = 0
export default (options: HttpOptions = {}) => new HttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
  fetch: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) => {
    const thisCall = call
    call += 1
    logDebug(`Apollo[${thisCall}]:`, input, init)
    return fetch(input, init).then((r) => {
      logDebug(`... Apollo[${thisCall}]: ${r.status}`)
      return r
    })
  },
  ...options,
})
