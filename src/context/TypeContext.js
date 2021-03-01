import React, { createContext, useState, useEffect } from "react";
import { filterTypes } from "./../constants";

export const TypeContext = createContext();

const TypeContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState(false);
  const [showModalType, setShowModalType] = useState(false);
  const [type, setType] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (type !== "") {
      getFilterTypes(type);
    }
  }, [type]);

  const getFilterTypes = (types) => {
    fetch(filterTypes(types))
      .then((res) => res.json())
      .then((data) => {
        setDoneFetch(true);
        setCards(data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <TypeContext.Provider
      value={{
        doneFetch,
        type,
        setType,
        cards,
        showModalType,
        setShowModalType,
      }}
    >
      {children}
    </TypeContext.Provider>
  );
};

export default TypeContextProvider;
