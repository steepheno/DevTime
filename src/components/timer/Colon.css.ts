import { style } from '@vanilla-extract/css';
import { timerTokens } from './timer.css';

export const colon = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: timerTokens.colon.gap,
});

export const dot = style({
  width: timerTokens.colon.dotSize,
  height: timerTokens.colon.dotSize,
  borderRadius: '50%',
  backgroundColor: timerTokens.colon.color,
});