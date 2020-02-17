import React from "react";
const CountItem = ({ number, label }) => {
  const singular = label => {
    switch (label) {
      case "days":
        return "day";
      case "hours":
        return "hour";
      case "minutes":
        return "minute";
      default:
        return "second";
    }
  };

  return (
    <div className='count-item'>
      <div className='count-number'>
        <span>{number}</span>
      </div>
      <div className='count-label'>
        <span>{number <= 1 ? singular(label) : label}</span>
      </div>
    </div>
  );
};

export default CountItem;
