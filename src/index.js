import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <div>
      <MainPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
