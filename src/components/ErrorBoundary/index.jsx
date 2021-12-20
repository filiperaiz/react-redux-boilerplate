import React from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

import PropTypes from 'prop-types'

const ErrorBoundary = ({ children, component }) => {
  const onErrorBoundary = (error, errorInfo) => {
    let errorComponent = errorInfo.componentStack

    const logError = {
      errorMessage: error.message,
      errorComponent
    }

    console.log('ERROR_BOUNDARY ->', logError)
  }

  return (
    <ReactErrorBoundary FallbackComponent={component} onError={onErrorBoundary}>
      {children}
    </ReactErrorBoundary>
  )
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.elementType
  ])
}

export default ErrorBoundary
