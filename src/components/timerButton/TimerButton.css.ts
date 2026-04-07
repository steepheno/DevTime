import { recipe } from '@vanilla-extract/recipes';
import { timerTokens } from '../timer/timer.css';

export const button = recipe({
  base: {
    width: timerTokens.button.size,
    height: timerTokens.button.size,
    borderRadius: timerTokens.button.radius,
    border: 'none',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'opacity 0.2s, background-color 0.2s',
  },
  variants: {
    state: {
      enabled: {
        backgroundColor: 'transparent',
        color: timerTokens.button.activeColor,
      },
      disabled: {
        color: timerTokens.button.disabledColor,
        cursor: 'not-allowed',
      },
    },
  },
  defaultVariants: {
    state: 'enabled',
  },
});
