import React from "react";
import "../../assets/css/styles.css";
const Button = ({ loadMore }) => {
  return (
    <button
      className="w-full h-full text-xl  text-white btn-loading"
      onClick={() => loadMore()}
    >
      Cargar mas
    </button>
  );
};

export default Button;
