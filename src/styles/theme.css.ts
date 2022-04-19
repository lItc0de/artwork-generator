import { createGlobalTheme } from '@vanilla-extract/css';

const globalTheme = createGlobalTheme(':root', {
  fonts: {
    body: '"Karla", sans-serif',
    headings: '"Shrikhand", cursive',
  },
  spacing: {
    pagePadding: '3rem',
    cardPadding: '2rem',
  },
  zIndex: {
    background: '0',
    page: '5',
    footer: '99',
    header: '100',
    overlay: '200',
    modal: '300',
  },
  borderRadius: '4px',
  sizes: {
    body: {
      mobile: '16px',
      desktop: '20px',
    },
    headings: {
      mobile: {
        h1: '2.75rem',
        h2: '2.5rem',
        h3: '2rem',
        h4: '1.75rem',
        h5: '1.5rem',
        h6: '1.25rem',
      },
      desktop: {
        h1: '5rem',
        h2: '3rem',
        h3: '2.5rem',
        h4: '2rem',
        h5: '1.75rem',
        h6: '1.5rem',
      },
    },
  },
  colors: {
    primary: '#6AE2C5',
    secondary: '#6AE2C5',
    text: {
      normal: 'rgba(0, 0, 0, 0.9)',
      dimmed: 'rgba(0, 0, 0, 0.8)',
    },
    background: {
      page: 'rgba(123, 97, 255, 1)',
      pageTransparent: 'rgba(123, 97, 255, 0.5)',
      card: 'rgba(0, 0, 0, 0.5)',
      code: 'rgba(0, 0, 0, 0.5)',
    },
    stroke: 'rgba(255, 255, 255, 0.33)',
  },
});

export const mediaQueries = {
  desktop: 'screen and (min-width: 750px)',
};

export default globalTheme;
