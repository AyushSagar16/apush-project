import React, { useEffect, useState } from 'react';

interface CountdownProps {
  hours: number;
}

const Countdown: React.FC<CountdownProps> = ({ hours }) => {
  const [timeLeft, setTimeLeft] = useState<number>(hours * 3600);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft > 0) {
          return prevTimeLeft - 1;
        } else {
          clearInterval(intervalId);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getTimeComponents = (seconds: number) => {
    const years = Math.floor(seconds / (365 * 24 * 60 * 60));
    seconds %= 365 * 24 * 60 * 60;
    const months = Math.floor(seconds / (30 * 24 * 60 * 60));
    seconds %= 30 * 24 * 60 * 60;
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= 24 * 60 * 60;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return { years, months, days, hours, minutes, secs };
  };

  const { years, months, days, hours: h, minutes, secs } = getTimeComponents(timeLeft);

  return (
    <span className='text-4xl'>
      {years} years, {months} months, {days} days, {h} hours, {minutes} minutes, {secs} seconds
    </span>
  );
};

export default Countdown;
