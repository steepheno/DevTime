import * as style from './TimerControls.css';
import { TimerButton } from '../timerButton';

export type TimerStatus = 'idle' | 'running' | 'paused';

interface TimerControlsProps {
  status: TimerStatus;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
}

/* 상태별 버튼 활성화 테이블 */
const buttonStateMap: Record<TimerStatus, { play: boolean; pause: boolean; stop: boolean }> = {
  idle: { play: true, pause: false, stop: false },
  running: { play: false, pause: true, stop: true },
  paused: { play: true, pause: false, stop: true },
};

export function TimerControls({ status, onPlay, onPause, onStop }: TimerControlsProps) {
  const enabled = buttonStateMap[status];

  return (
    <div className={style.container}>
      <TimerButton
        variant="play"
        disabled={!enabled.play}
        onClick={onPlay}
      />
      <TimerButton
        variant="pause"
        disabled={!enabled.pause}
        onClick={onPause}
      />
      <TimerButton
        variant="stop"
        disabled={!enabled.stop}
        onClick={onStop}
      />
    </div>
  );
}
