import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  width: '100%',
  minHeight: 'calc(100vh - 56px)',
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const welcome = style({
  height: '86px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const welcomeText = style({
  color: vars.color.indigo,
  fontSize: '72px',
  fontWeight: 'bold',
});

export const loginNotice = style({
  marginTop: '10px',
  marginBottom: '10px',
  color: vars.color.indigo,
  fontSize: vars.font.size.bodySmall,
  fontWeight: vars.font.weight.regular,
});
