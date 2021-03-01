import React, { useState, useContext } from "react";
import { CardsContext } from "../../context/CardsContext";

import "../../assets/css/styles.css";

const Card = ({ images, name, id }) => {
  const { showModal, setShowModal, setPokeName, pokeName } = useContext(
    CardsContext
  );

  //const [idPoke, setIdPoke] = useState(null);
  const showModals = () => {
    setPokeName(name);
    console.log(pokeName);
    setShowModal(true);
  };

  return (
    <>
      <div className="mx-4 my-4 img-card " onClick={() => showModals()}>
        <img src={images.large} className="w-full h-auto img-poke " />
      </div>
    </>
  );
};

export default Card;
