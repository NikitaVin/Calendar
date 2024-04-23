import { useEffect, useState } from 'react';
import { TimerBox } from './Clock.styles';

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const animationId = requestAnimationFrame(() => setDate(new Date()));

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [date]);

  return <TimerBox>{date.toLocaleTimeString()}</TimerBox>;
};
