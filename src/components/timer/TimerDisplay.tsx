import { Colon } from './Colon';
import { TimeUnit } from './TimeUnit';
import * as style from './TimerDisplay.css';

interface TimerDisplayProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export function TimerDisplay({ hours, minutes, seconds }: TimerDisplayProps) {
  return (
    <div className={style.container}>
      <TimeUnit
        value={hours}
        label="HOURS"
      />
      <Colon />
      <TimeUnit
        value={minutes}
        label="MINUTES"
      />
      <Colon />
      <TimeUnit
        value={seconds}
        label="SECONDS"
      />
    </div>
  );
}
