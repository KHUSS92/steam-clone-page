import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Filters from "../components/Filters";
import RecommendationCard from "../components/RecommendationCard";
import dummyData from "../data/dummyData";

const MainPage = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="content">
        <Sidebar playtime={dummyData.playtime} />
        <div className="main-content">
          <Filters />
          <div className="recommendations">
            {dummyData.recommendations.map((item, index) => (
              <RecommendationCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;