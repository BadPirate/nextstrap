import { useState } from 'react'
import { Form } from 'react-bootstrap'
import ErrorBanner from './ErrorBanner'
import GrowSpinner from './GrowSpinner'

const APIForm = ({
  api, params: paramsRaw, onSuccess, children,
}: {
  api: string;
  params?: { [key: string]: string|null; };
  children: JSX.Element;
  // eslint-disable-next-line no-unused-vars
  onSuccess?: (response: Response) => (void)
}) => {
  const [error, setError] = useState<Error | undefined | null>(undefined)
  const params : { [key: string]: string } = {}
  if (paramsRaw) {
    Object.keys(paramsRaw).forEach((key) => {
      const value = paramsRaw[key]
      if (value) params[key] = value
    })
  }
  return (
    error === null ? <GrowSpinner /> : (
      <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        fetch(`${api}${params ? `?${new URLSearchParams(params)}` : ''}`)
          .then((r) => {
            const { status } = r
            if (status === 200) {
              setError(undefined)
              if (onSuccess) {
                onSuccess(r)
              }
            } else {
              setError(Error(`Unexpected status: ${status}`))
            }
          }).catch((err) => {
            setError(err)
          })
      }}
      >
        {error !== undefined && error !== null ? <ErrorBanner error={error} /> : null}
        {children}
      </Form>
    )
  )
}

APIForm.defaultProps = {
  onSuccess: null,
  params: {},
}

export default APIForm
