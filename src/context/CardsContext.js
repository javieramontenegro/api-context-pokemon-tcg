import React, { createContext, useState, useEffect } from "react";
import { allCards } from "./../constants";

export const CardsContext = createContext();

const CardsContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState();
  const [showModal, setShowModal] = useState(false);
  const [pokeName, setPokeName] = useState("");

  const [cards, setCards] = useState([]);

  useEffect(() => getAllCards(), []);

  const getAllCards = () => {
    fetch(allCards())
      .then((res) => res.json())
      .then((data) => {
        setDoneFetch(true);
        setCards(data.data);
      })
      .catch((err) => console.log(err));
  };

  //console.log(cards);
  return (
    <CardsContext.Provider
      value={{
        doneFetch,
        cards,
        showModal,
        setShowModal,
        pokeName,
        setPokeName,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContextProvider;
