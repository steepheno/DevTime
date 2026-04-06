import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('body', {
  fontFamily: vars.font.family.base,
  color: vars.color.gray[500],
  backgroundColor: vars.color.gray.white,
});