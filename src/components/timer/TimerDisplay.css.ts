import { style } from '@vanilla-extract/css';
import { timerTokens } from './timer.css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: timerTokens.layout.unitGap,
});