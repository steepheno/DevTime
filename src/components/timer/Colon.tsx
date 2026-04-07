import * as style from './Colon.css';

export function Colon() {
  return (
    <div
      className={style.colon}
      aria-hidden="true"
    >
      <div className={style.dot} />
      <div className={style.dot} />
    </div>
  );
}
