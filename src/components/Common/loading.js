import React from "react";
import logo from "../../assets/img/pokeball.svg";
import "../../assets/css/styles.css";
const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center self-center">
      <img src={logo} className="w-full h-auto img-loading self-center" />
    </div>
  );
};

export default loading;
