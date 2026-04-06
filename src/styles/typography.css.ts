import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

// 사이즈 + lineHeight 묶음
const size = {
  heading: { fontSize: vars.font.size.heading, lineHeight: vars.font.lineHeight.heading },
  title: { fontSize: vars.font.size.title, lineHeight: vars.font.lineHeight.title },
  subtitle: { fontSize: vars.font.size.subtitle, lineHeight: vars.font.lineHeight.subtitle },
  body: { fontSize: vars.font.size.body, lineHeight: vars.font.lineHeight.body },
  bodySmall: { fontSize: vars.font.size.bodySmall, lineHeight: vars.font.lineHeight.bodySmall },
  caption: { fontSize: vars.font.size.caption, lineHeight: vars.font.lineHeight.caption },
  label: { fontSize: vars.font.size.label, lineHeight: vars.font.lineHeight.label },
} as const;

// Heading
export const headingB = style({ ...size.heading, fontWeight: vars.font.weight.bold });
export const headingS = style({ ...size.heading, fontWeight: vars.font.weight.semibold });
export const headingM = style({ ...size.heading, fontWeight: vars.font.weight.medium });
export const headingR = style({ ...size.heading, fontWeight: vars.font.weight.regular });

// Title
export const titleB = style({ ...size.title, fontWeight: vars.font.weight.bold });
export const titleS = style({ ...size.title, fontWeight: vars.font.weight.semibold });
export const titleM = style({ ...size.title, fontWeight: vars.font.weight.medium });
export const titleR = style({ ...size.title, fontWeight: vars.font.weight.regular });

// Subtitle
export const subtitleB = style({ ...size.subtitle, fontWeight: vars.font.weight.bold });
export const subtitleS = style({ ...size.subtitle, fontWeight: vars.font.weight.semibold });
export const subtitleM = style({ ...size.subtitle, fontWeight: vars.font.weight.medium });
export const subtitleR = style({ ...size.subtitle, fontWeight: vars.font.weight.regular });

// Body
export const bodyB = style({ ...size.body, fontWeight: vars.font.weight.bold });
export const bodyS = style({ ...size.body, fontWeight: vars.font.weight.semibold });
export const bodyM = style({ ...size.body, fontWeight: vars.font.weight.medium });
export const bodyR = style({ ...size.body, fontWeight: vars.font.weight.regular });

// Body Small
export const bodySmallB = style({ ...size.bodySmall, fontWeight: vars.font.weight.bold });
export const bodySmallS = style({ ...size.bodySmall, fontWeight: vars.font.weight.semibold });
export const bodySmallM = style({ ...size.bodySmall, fontWeight: vars.font.weight.medium });
export const bodySmallR = style({ ...size.bodySmall, fontWeight: vars.font.weight.regular });

// Caption
export const captionB = style({ ...size.caption, fontWeight: vars.font.weight.bold });
export const captionS = style({ ...size.caption, fontWeight: vars.font.weight.semibold });
export const captionM = style({ ...size.caption, fontWeight: vars.font.weight.medium });
export const captionR = style({ ...size.caption, fontWeight: vars.font.weight.regular });

// Label
export const labelB = style({ ...size.label, fontWeight: vars.font.weight.bold });
export const labelS = style({ ...size.label, fontWeight: vars.font.weight.semibold });
export const labelM = style({ ...size.label, fontWeight: vars.font.weight.medium });
export const labelR = style({ ...size.label, fontWeight: vars.font.weight.regular });