import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const rightSection = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const nav = style({
  width: '134px',
  height: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const navLink = style({
  textDecoration: 'none',
  color: vars.color.indigo,
  fontSize: vars.font.size.body,
  fontWeight: vars.font.weight.semibold,
});