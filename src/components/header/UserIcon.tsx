'use client';

import * as style from './UserIcon.css';
import Link from 'next/link';

const isLogin = false; // 로그인 구현 시 수정 예정

export function UserIcon() {
  return (
    <div className={style.rightSection}>
      {isLogin ? (
        <div>
          <p>유저 아이콘</p>
        </div>
      ) : (
        <nav className={style.nav}>
          <Link
            className={style.navLink}
            href={'/login'}
          >
            로그인
          </Link>
          <Link
            className={style.navLink}
            href={'/signup'}
          >
            회원가입
          </Link>
        </nav>
      )}
    </div>
  );
}
