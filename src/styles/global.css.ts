import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html, body', {
  minHeight: '100vh',
});

globalStyle('body', {
  fontFamily: vars.font.family.base,
  color: vars.color.gray[500],
  background: 'linear-gradient(135deg, #F6F7F9 0%, #E9ECF5 100%)', // 디자인시스템에 없는 스타일로 직접 지정
});
