import React, { lazy, Suspense } from 'react';

const LazyImageFallback = lazy(() => import('./ImageFallback'));

const ImageFallback = props => (
  <Suspense fallback={null}>
    <LazyImageFallback {...props} />
  </Suspense>
);

export default ImageFallback;
