import { PauseIcon, PlayIcon, StopIcon } from './icons';
import { button } from './TimerButton.css';

type Variant = 'play' | 'pause' | 'stop';

interface TimerButtonProps {
  variant: Variant;
  disabled?: boolean;
  onClick?: () => void;
}

const iconMap = {
  play: PlayIcon,
  pause: PauseIcon,
  stop: StopIcon,
};

const labelMap = {
  play: '시작',
  pause: '일시정지',
  stop: '정지',
};

export function TimerButton({ variant, disabled = false, onClick }: TimerButtonProps) {
  const Icon = iconMap[variant];

  return (
    <button
      type="button"
      className={button({ state: disabled ? 'disabled' : 'enabled' })}
      disabled={disabled}
      onClick={onClick}
      aria-label={labelMap[variant]}
    >
      <Icon />
    </button>
  );
}
