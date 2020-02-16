import React from "react";
import CountItem from "./CountItem";
import Title from "../../common/Title";
import MyCountdown from "react-countdown-now";
const CountDown = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <div className='container'>
        <Title title='Token Pre-sale starting in:' />
        <div className='count-down-wraper'>
          <CountItem number={days} label='days' />
          <span className='doubleDots'>:</span>
          <CountItem number={hours} label='hours' />
          <span className='doubleDots'>:</span>
          <CountItem number={minutes} label='minutes' />
          <span className='doubleDots'>:</span>
          <CountItem number={seconds} label='seconds' />
        </div>
      </div>
    );
  };

  return (
    <div className='count-down container-padding'>
      <MyCountdown date={Date.now() + 558121000} renderer={renderer} />
    </div>
  );
};

export default CountDown;
