import React from "react";

const Title = ({ title, text }) => {
  return (
    <div className='text-box'>
      <span className='title'>{title}</span>
      <span className='text'>{text}</span>
    </div>
  );
};

export default Title;
