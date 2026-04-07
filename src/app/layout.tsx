import type { Metadata } from 'next';
import '@/styles/global.css';
import localFont from 'next/font/local';
import { themeClass } from '@/styles/theme.css';
import { Header } from '@/components/header';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

const dseg7 = localFont({
  src: '../fonts/DSEG7Classic-Bold.woff2',
  display: 'swap',
  variable: '--font-dseg7',
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
    <html lang="ko">
      <body className={`${themeClass} ${pretendard.variable} ${pretendard.className} ${dseg7.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
