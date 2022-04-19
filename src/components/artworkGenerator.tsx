import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

import p5Sketch from '../sketches/main';

type Props = {
  className?: string;
}

const defaultProps: Props = {
  className: '',
} as Props;

const ArtworkGenerator: React.FC<Props> = ({ className }) => {
  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvas.current) return;

    canvas.current.innerHTML = '';

    // eslint-disable-next-line
    new p5(p5Sketch, canvas.current);
  }, [canvas]);

  return (
    <div className={className}>
      <div ref={canvas} />
    </div>
  );
};

ArtworkGenerator.defaultProps = defaultProps;

export default ArtworkGenerator;
