import React from 'react';
import ArtworkWrapper from '../components/artworkWrapper';
import * as styles from '../styles/index.css';

const IndexPage = () => {
  const download = () => {
    if (!document) return;

    const link = document.createElement('a');
    link.download = 'artwork.png';
    const canvas: HTMLCanvasElement = document.getElementById('defaultCanvas0') as HTMLCanvasElement;
    if (!canvas) return;

    link.href = canvas.toDataURL('image/png');
    link.click();
    link.remove();
  };

  return (
    <main className={styles.index}>
      <title>Artwork generator</title>
      <h1 className={styles.title}>arwork generator 1.0</h1>
      <ArtworkWrapper className={styles.artworkWrapper} />
      <button className={styles.button} onClick={download} type="button">give me the thing</button>
    </main>
  );
};

export default IndexPage;
