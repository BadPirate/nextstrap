import { Alert } from 'react-bootstrap'

type ErrorDetail = { error: Error | string }
const ErrorBanner = ({ error } : ErrorDetail) => {
  let errorString : string
  if (typeof error === 'string') {
    errorString = error
  } else if (process.env.NEXT_PUBLIC_DEBUG) {
    errorString = error.stack ?? error.toString()
  } else {
    errorString = error.toString()
  }
  return (
    <Alert variant="danger">
      {errorString}
    </Alert>
  )
}

export default ErrorBanner
