import React, { lazy, Suspense } from 'react';

const LazyErrorMessage = lazy(() => import('./ErrorMessage'));

const ErrorMessage = props => (
  <Suspense fallback={null}>
    <LazyErrorMessage {...props} />
  </Suspense>
);

export default ErrorMessage;
