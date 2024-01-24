import React, { lazy, Suspense } from 'react';

const LazyCharacterGrid = lazy(() => import('./CharacterGrid'));

const CharacterGrid = props => (
  <Suspense fallback={null}>
    <LazyCharacterGrid {...props} />
  </Suspense>
);

export default CharacterGrid;
