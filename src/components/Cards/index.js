import React, { useContext, useState } from "react";
import { CardsContext } from "../../context/CardsContext";
import Loading from "../Common/loading";
import Cards from "./Cards";
import "../../assets/css/styles.css";
const CardsList = () => {
  const { doneFetch, cards } = useContext(CardsContext);

  return (
    <>
      {doneFetch ? (
        cards.length ? (
          <>
            <div className="w-full h-full flex flex-wrap justify-center px-6 md:px-20 pt-6">
              <Cards cards={cards} />
            </div>
          </>
        ) : (
          <p>no result</p>
        )
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CardsList;
