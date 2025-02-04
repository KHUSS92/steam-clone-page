import React from "react";

const RecommendationCard = ({ data }) => {
  return (
    <div className="recommendation-card">
      <h3>{data.title}</h3>
      <p>Released: {data.releaseDate}</p>
      <p>Genres: {data.genres.join(", ")}</p>
    </div>
  );
};

export default RecommendationCard;