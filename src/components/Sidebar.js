import React from "react";

const Sidebar = ({ playtime }) => {
  return (
    <aside className="sidebar">
      <h2>Your Playtime</h2>
      <ul>
        {playtime.map((item, index) => (
          <li key={index}>
            <p>{item.game}</p>
            <p>{item.hours} hours</p>
            <p>Last played: {item.lastPlayed}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;