import Image from 'next/image';
import logo from '@/assets/icons/✅ Logo.svg';
import Link from 'next/link';
import * as style from './Header.css';
import { UserIcon } from './UserIcon';

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <div className={style.leftSection}>
          <Link href={'/'}>
            <Image
              src={logo}
              alt="DevTime 로고"
              priority
            />
          </Link>
          <nav className={style.nav}>
            <Link
              href={'/dashboard'}
              className={style.navLink}
            >
              대시보드
            </Link>
            <Link
              href={'/ranking'}
              className={style.navLink}
            >
              랭킹
            </Link>
          </nav>
        </div>

        {/* 로그인 여부에 따라 렌더링 달라짐 */}
        <UserIcon />
      </div>
    </header>
  );
}
