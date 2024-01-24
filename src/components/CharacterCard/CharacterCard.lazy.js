import React, { lazy, Suspense } from 'react';

const LazyCharacterCard = lazy(() => import('./CharacterCard'));

const CharacterCard = props => (
  <Suspense fallback={null}>
    <LazyCharacterCard {...props} />
  </Suspense>
);

export default CharacterCard;
