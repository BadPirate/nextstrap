import { SubscriptionResult } from '@apollo/client'
import ErrorBanner from '../components/ErrorBanner'
import GrowSpinner from '../components/GrowSpinner'

function validateApollo<SubscriptionType>({ loading, data, error }:
  SubscriptionResult<SubscriptionType, any>): {
    invalid?: JSX.Element;
    data?: SubscriptionType;
} {
  if (error) { return { invalid: <ErrorBanner error={error} /> } }
  if (loading || !data) { return { invalid: <GrowSpinner /> } }
  return { data }
}

export default validateApollo
