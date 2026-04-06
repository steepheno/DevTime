import type { Metadata } from 'next';
import '@/styles/global.css'
import localFont from 'next/font/local';
import { themeClass } from '@/styles/theme.css';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'DevTime',
  description: '개발자를 위한 공부시간 체크 타이머, DevTime',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${themeClass} ${pretendard.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
