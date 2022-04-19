import { globalStyle } from '@vanilla-extract/css';
import vars, { mediaQueries } from './theme.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('body', {
  fontFamily: vars.fonts.body,
  fontSize: vars.sizes.body.mobile,
  backgroundColor: vars.colors.background.page,
  height: '100vh',
  '@media': {
    [mediaQueries.desktop]: {
      fontSize: vars.sizes.body.desktop,
    },
  },
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('#___gatsby, #gatsby-focus-wrapper', {
  isolation: 'isolate',
  height: '100%',
});

globalStyle('canvas', {
  margin: 0,
  padding: 0,
  display: 'block',
});

// Text styles
globalStyle('a', {
  textDecoration: 'underline',
  color: vars.colors.primary,
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  color: vars.colors.text.normal,
  margin: '2rem 0 1rem',
});

globalStyle('h1', {
  fontSize: vars.sizes.headings.mobile.h1,
  fontFamily: vars.fonts.headings,
  '@media': {
    [mediaQueries.desktop]: {
      fontSize: vars.sizes.headings.desktop.h1,
    },
  },
});

globalStyle('h2', {
  fontSize: vars.sizes.headings.mobile.h2,
  '@media': {
    [mediaQueries.desktop]: {
      fontSize: vars.sizes.headings.desktop.h2,
    },
  },
});

globalStyle('h3', {
  fontSize: vars.sizes.headings.mobile.h3,
  '@media': {
    [mediaQueries.desktop]: {
      fontSize: vars.sizes.headings.desktop.h3,
    },
  },
});

globalStyle('h4', {
  fontSize: vars.sizes.headings.mobile.h4,
  '@media': {
    [mediaQueries.desktop]: {
      fontSize: vars.sizes.headings.desktop.h4,
    },
  },
});

globalStyle('h5', {
  fontSize: vars.sizes.headings.mobile.h5,
  fontFamily: vars.fonts.headings,
  '@media': {
    [mediaQueries.desktop]: {
      fontSize: vars.sizes.headings.desktop.h5,
    },
  },
});

globalStyle('h6', {
  fontSize: vars.sizes.headings.mobile.h6,
  '@media': {
    [mediaQueries.desktop]: {
      fontSize: vars.sizes.headings.desktop.h6,
    },
  },
});

// Lists
globalStyle('ul', {
  padding: '0 2.2rem',
});

globalStyle('ul > li', {
  listStyle: 'none',
  margin: '0.25rem 0',
});

globalStyle('ul > li::before', {
  content: '☻',
  color: vars.colors.text.dimmed,
  display: 'inline-block',
  width: '1.2rem',
  marginLeft: '-1.2rem',
  fontSize: '1rem',
});
