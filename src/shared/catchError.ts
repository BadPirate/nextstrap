function catchError(e: any): Error {
  if (e instanceof TypeError
          || e instanceof RangeError
          || e instanceof EvalError
          || e instanceof Error
  ) {
    return e
  } if (typeof e === 'string') {
    return new Error(e)
  }
  return new Error(`Unhandled error type. ${typeof e}`)
}

export default catchError
