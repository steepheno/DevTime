import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    /* Primary blue */
    primaryBlue: {
      base: '#4C79FF',
      light10: 'rgba(76, 121, 255, 0.1)',
      light30: 'rgba(76, 121, 255, 0.3)',
      gradient: 'linear-gradient(135deg, #4C79FF, #023E99)',
    },

    /* Primary skyblue */
    primarySkyblue: {
      base: '#78B0FF',
      light10: 'rgba(120, 176, 255, 0.1)',
      light30: 'rgba(120, 176, 255, 0.3)',
    },

    /* Secondary */
    indigo: '#023E99',
    indigoLight: '#A3C3FF',
    informative: '#2563EB',
    informativeLight: '#53B2FF',
    negative: '#DC2626',
    negativeLight: '#FF6363',
    notice: '#FBBF24',
    noticeLight: '#FFDB7F',
    positive: '#22C55E',
    positiveLight: '#62EC95',
    fuchsia: '#FD28EC',
    fuchsiaLight: '#FF87F5',

    /* Gray */
    gray: {
      white: '#FFFFFF',
      50: '#F9FAFB',
      100: '#F0F2F5',
      200: '#E5E7EB',
      300: '#CCD0D6',
      400: '#969DA8',
      500: '#717887',
    },

    /* State */
    state: {
      disabled: '#969DA8',
      hover: 'rgba(76, 121, 255, 0.1)',
      active: 'rgba(76, 121, 255, 0.1)',
      focus: '#4C79FF',
      dim: 'rgba(0, 0, 0, 0.5)',
    },
  },
  
  /* Space */
  space: {
    // 컴포넌트 간 스페이싱
    2: '2px',
    4: '4px',
    8: '8px',
    12: '12px',
    16: '16px',
    20: '20px',
    24: '24px',
    32: '32px',
    36: '36px',

    // 영역 간 스페이싱 (컴포넌트 스페이싱 포함)
    40: '40px',
    48: '48px',
    56: '56px',
    64: '64px',
    72: '72px',
  },

  /* Font */
  font: {
    family: {
      base: "'Pretendard Variable', Pretendard, sans-serif",
    },
    size: {
      heading: '1.5rem',    // 24px
      title: '1.25rem',     // 20px
      subtitle: '1.125rem', // 18px
      body: '1rem',         // 16px
      bodySmall: '0.875rem',// 14px
      caption: '0.75rem',   // 12px
      label: '0.625rem',    // 10px
    },
    lineHeight: {
      heading: '1.875rem',  // 30px
      title: '1.5rem',      // 24px
      subtitle: '1.375rem', // 22px
      body: '1.25rem',      // 20px
      bodySmall: '1.125rem',// 18px
      caption: '1rem',      // 16px
      label: '0.75rem',     // 12px
    },
    weight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
});
