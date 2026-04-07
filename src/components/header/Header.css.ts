import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const header = style({
  width: '100%',
  height: '40px',
  marginTop: '16px',
  display: 'flex',
  justifyContent: 'center',
  position: 'sticky',
  top: 0,
  fontFamily: vars.font.family.base,
});

export const inner = style({
  width: '1200px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const leftSection = style({
  width: '316px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const nav = style({
  width: '120px',
  height: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const navLink = style({
  textDecoration: 'none',
  color: vars.color.indigo,
  fontSize: vars.font.size.body,
  fontWeight: vars.font.weight.semibold,
});
