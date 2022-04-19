import { style } from '@vanilla-extract/css';
import vars from './theme.css';

export const index = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '100%',
  gap: '1rem',
  padding: '2rem',
});

export const title = style({
  textAlign: 'center',
});

export const artworkWrapper = style({
});

export const button = style({
  backgroundColor: '#fff',
  color: vars.colors.background.page,
  border: 'none',
  borderRadius: '2px',
  padding: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
});
