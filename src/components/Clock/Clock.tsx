import { memo, useEffect, useRef, useState } from 'react';
import { TimerBox } from './Clock.styles';

export const Clock = memo(() => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const dateRef = useRef(new Date().toLocaleTimeString());

  useEffect(() => {
    const animation = () => {
      const time = dateRef.current;
      const currentTime = new Date().toLocaleTimeString();

      if (time !== currentTime) {
        dateRef.current = currentTime;
        setDate(currentTime);
      }

      window.requestAnimationFrame(animation);
    };

    window.requestAnimationFrame(animation);

    return () => {
      cancelAnimationFrame(animation as unknown as number);
    };
  }, []);

  return <TimerBox>{date}</TimerBox>;
});
Clock.displayName = 'Clock';
