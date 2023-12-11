import { useState, useEffect } from 'react';
import Battery from './battery';

const Widget = () => {
  const [greet, setGreet] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const today = new Date();
      displayGreetings(today);
      displayDate(today);
      displayClock(today);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function displayGreetings(today) {
    const hrs = today.getHours();
    let name = '';
    let greet;
    if (hrs < 12) {
      greet = 'Good Morning ' + name;
    } else if (hrs >= 12 && hrs <= 17) {
      greet = 'Good Afternoon ' + name;
    } else if (hrs >= 17 && hrs <= 24) {
      greet = 'Good Evening ' + name;
    }
    setGreet(greet);
  }

  function displayDate(today) {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const dayName = days[today.getDay()];
    const monthName = monthNames[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();
    setDate(dayName + ', ' + monthName + ' ' + date + ', ' + year);
  }

  function displayClock(today) {
    let hour = padZeros(twelveHour(today.getHours()));
    let minutes = padZeros(today.getMinutes());
    let seconds = padZeros(today.getSeconds());
    if (today.getHours() >= 12) {
      seconds 
    } else {
      seconds
    }

    setHour(hour);
    setMin(minutes);
    setSec(seconds);
  }

  function twelveHour(hour) {
    if (hour > 12) {
      return hour -= 12;
    } else if (hour === 0) {
      return hour = 12;
    } else {
      return hour;
    }
  }

  function padZeros(num) {
    if (num < 10) {
      num = '0' + num;
    }
    return num;
  }

  return (
      <div className="widget w-4/5 sm:w-3/4 lg:w-2/4 xl:w-2/5 h-full  bg-[#696767] flex flex-wrap justify-center items-center flex-row rounded-[10px] border-3 border-black ">
        <div className="date w-full font-medium text-white text-[18px] sm:text-[25px] text-center">
          {date}
        </div>
        <div className="clock w-full flex justify-center text-[18px] sm:text-[25px] font-medium tex-white text-2xl">
            <div className="greet flex justify-end font-medium italic text-white text-center mx-4">
            {greet}
            </div>
          <div className="time inline-block w-30 text-white font-semibold">
            {hour}
          </div>
          <div className="colon text-white font-semibold">:</div>
          <div className="time inline-block w-30 text-white font-semibold">
            {min}
          </div>
          <div className="colon text-white font-semibold">:</div>
          <div className="time inline-block w-[40px] text-white font-semibold">
            {sec}
          </div>
        </div>
        <Battery />
      </div>
  );
};

export default Widget;