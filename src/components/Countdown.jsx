import { useEffect, useState } from 'react';

const Countdown = (props) => {
  const { dateData } = props;

  const [dateCountdown, setDateCountdown] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date(
        `${dateData.month}/${dateData.day}/${dateData.year}`
      ).getTime();
      const currentDate = new Date().getTime();
      const dateDistance = targetDate - currentDate;
      setDateCountdown({
        day: Math.floor(dateDistance / (1000 * 60 * 60 * 24)),
        hour: Math.floor(
          (dateDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minute: Math.floor((dateDistance % (1000 * 60 * 60)) / (1000 * 60)),
        second: Math.floor((dateDistance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [dateData]);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span className="day-number">{dateCountdown.day}</span>
        Hari
      </div>
      <div className="countdown-item">
        <span className="hour-number">{dateCountdown.hour}</span>
        Jam
      </div>
      <div className="countdown-item">
        <span className="minute-number">{dateCountdown.minute}</span>
        Menit
      </div>
      <div className="countdown-item">
        <span className="second-number">{dateCountdown.second}</span>
        Detik
      </div>
    </div>
  );
};

export default Countdown;
