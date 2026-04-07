import * as style from './TimeUnit.css';

interface TimeUnitProps {
  value: number;
  label: string;
}

export function TimeUnit({ value, label }: TimeUnitProps) {
  const formattedValue = value.toString().padStart(2, '0');

  return (
    <div className={style.card}>
      <div className={style.digit}>{formattedValue}</div>
      <div className={style.label}>{label}</div>
    </div>
  );
}
