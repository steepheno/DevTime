import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { timerTokens } from './timer.css';

export const card = style({
  width: timerTokens.card.width,
  height: timerTokens.card.height,
  borderRadius: timerTokens.card.radius,
  padding: timerTokens.card.padding,
  background: timerTokens.card.background,
  border: timerTokens.card.border,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
});

export const digit = style({
  fontFamily: vars.font.family.timer,
  fontSize: timerTokens.digit.fontSize,
  fontWeight: timerTokens.digit.fontWeight,
  color: timerTokens.digit.color,
  lineHeight: 1,
  fontVariantNumeric: 'tabular-nums',
  // 숫자가 카드 안에서 세로 중앙에 오도록
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const label = style({
  fontSize: timerTokens.label.fontSize,
  fontWeight: timerTokens.label.fontWeight,
  color: timerTokens.label.color,
  letterSpacing: timerTokens.label.letterSpacing,
  textTransform: 'uppercase',
});
