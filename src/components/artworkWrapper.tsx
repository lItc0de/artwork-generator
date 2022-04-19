import React, { Suspense, lazy } from 'react';

const ArtworkGenerator = lazy(() => import('./artworkGenerator'));

type Props = {
  className?: string;
}

const defaultProps: Props = {
  className: '',
} as Props;

const ArtworkWrapper: React.FC<Props> = ({ className }) => {
  const isSSR = typeof window === 'undefined';

  if (isSSR) return null;
  return (
    <Suspense fallback={<div />}>
      <ArtworkGenerator className={className} />
    </Suspense>
  );
};

ArtworkWrapper.defaultProps = defaultProps;

export default ArtworkWrapper;
