import { vars } from '@/styles/theme.css';

// 타이머 전용 로컬 토큰
export const timerTokens = {
  // TimeUnit 카드
  card: {
    width: '264px',
    height: '298px',
    radius: '12px',
    padding: '8px 8px 36px 8px',
    background: `linear-gradient(135deg, transparent 0%, ${vars.color.primaryBlue.light20} 100%)`,
    border: `1px solid ${vars.color.primaryBlue.base}`,
  },

  // 숫자
  digit: {
    fontSize: '154px',
    fontWeight: vars.font.weight.regular,
    color: vars.color.primaryBlue.base,
  },

  // 레이블 (HOURS, MINUTES, SECONDS)
  label: {
    fontSize: vars.font.size.label,
    fontWeight: vars.font.weight.semibold,
    color: vars.color.primaryBlue.base,
    letterSpacing: '0.15rem',
  },

  // 콜론
  colon: {
    dotSize: '24px',
    gap: '64px', // 두 점 사이 간격
    color: vars.color.primaryBlue.base,
  },

  // 버튼
  button: {
    size: '100px',
    radius: '12px',
    activeColor: vars.color.primaryBlue.base,
    disabledColor: vars.color.primaryBlue.light10,
  },

  // 레이아웃
  layout: {
    unitGap: '48px', // TimeUnit 사이 간격 (콜론 포함)
    sectionGap: '48px', // Display와 Controls 사이 간격
    buttonGap: '80px', // 버튼 사이 간격
  },
} as const;
