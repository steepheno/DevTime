import { style } from '@vanilla-extract/css';
import { timerTokens } from './timer.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: timerTokens.layout.sectionGap,
});