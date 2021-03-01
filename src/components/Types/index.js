import React, { useContext, useState } from "react";
import { TypeContext } from "../../context/TypeContext";
import Modals from "../Common/Modals";

import Types from "./Types";

const TypesList = () => {
  const { type, cards } = useContext(TypeContext);

  return (
    <>
      <div className="w-full h-full flex flex-wrap justify-center px-20">
        <Types typePoke={type} cards={cards} />
      </div>
    </>
  );
};

export default TypesList;
