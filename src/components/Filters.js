import React, { useState } from "react";
import Slider from "./Slider";

const Filters = () => {
  const [popularity, setPopularity] = useState(50); // Default value for popularity
  const [age, setAge] = useState(50); // Default value for age

  return (
    <div className="filters">
      <h2>Filters</h2>

      <div className="filter-group">
        <p>Weight by popularity</p>
        <Slider
          min={0}
          max={100}
          value={popularity}
          onChange={(e) => setPopularity(e.target.value)}
          labels={{ min: "POPULAR", max: "NICHE" }}
        />
      </div>

      <div className="filter-group">
        <p>Filter by age</p>
        <Slider
          min={0}
          max={100}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          labels={{ min: "OLDER", max: "NEWER" }}
        />
      </div>
    </div>
  );
};

export default Filters;
