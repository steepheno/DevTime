'use client';

import * as style from './TimerLayout.css';
import { TimerControls, TimerStatus } from './TimerControls';
import { TimerDisplay } from './TimerDisplay';

export function TimerLayout() {
  // 임시 데이터
  const hours = 0;
  const minutes = 42;
  const seconds = 7;
  const status: TimerStatus = 'idle';

  const handlePlay = () => {
    console.log('Play');
  };

  const handlePause = () => {
    console.log('Pause');
  };

  const handleStop = () => {
    console.log('Stop');
  };

  return (
    <div className={style.container}>
      <TimerDisplay
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
      <TimerControls
        status={status}
        onPlay={handlePlay}
        onPause={handlePause}
        onStop={handleStop}
      />
    </div>
  );
}
