import React, { Component, ErrorInfo, ReactNode, Suspense } from 'react'

import { EMPTY_STRING } from '@/shared/constants/base'
import { Error } from '@/widgets/error'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // console.log(error)

    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console.log(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <Suspense fallback={EMPTY_STRING}>
          <Error />
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary
