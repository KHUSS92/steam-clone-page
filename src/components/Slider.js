import React from "react";

const Slider = ({ min, max, value, onChange, labels }) => {
  return (
    <div className="slider-container">
      <div className="slider-labels">
        <span>{labels.min}</span>
        <span>{labels.max}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="slider"
      />
    </div>
  );
};

export default Slider;
