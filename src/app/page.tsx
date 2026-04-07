import { TimerLayout } from '@/components/timer';
import * as style from './page.css';

export default function Home() {
  const isLogin = false;

  return (
    <section className={style.container}>
      {/* 환영 문구 */}
      {isLogin ? (
        <div>
          <p>안녕</p>
        </div>
      ) : (
        <div className={style.welcome}>
          <p className={style.welcomeText}>WELCOME</p>
          <p className={style.loginNotice}>DevTime을 이용하려면 로그인이 필요합니다.</p>
        </div>
      )}

      {/* 타이머 UI */}
      <main style={{ padding: '64px', display: 'flex', justifyContent: 'center' }}>
        <TimerLayout />
      </main>
    </section>
  );
}
