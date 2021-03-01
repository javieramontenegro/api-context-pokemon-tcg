import React, { useContext, useState } from "react";
import { TypeContext } from "../../context/TypeContext";
import psy from "../../assets/img/psiquico.svg";
import normal from "../../assets/img/normal.svg";
import dragon from "../../assets/img/dragon.svg";
import fairy from "../../assets/img/fairy.svg";
import figth from "../../assets/img/figth.svg";
import fire from "../../assets/img/fire.svg";
import grass from "../../assets/img/grass.svg";
import electric from "../../assets/img/electric.svg";
import steel from "../../assets/img/steel.svg";
import water from "../../assets/img/water.svg";
import darck from "../../assets/img/darck.svg";
const Energy = () => {
  const { setType } = useContext(TypeContext);
  return (
    <>
      <div className="w-full h-full flex  flex-col justify-center my-24">
        {/*  FILA 1 */}
        <div className="w-full h-auto flex flex-wrap justify-center my-4">
          <img
            src={psy}
            className="w-full h-auto img-energy-type mx-4"
            onClick={() => setType("Psychic")}
            alt="psy"
          />

          <img
            src={normal}
            className="w-full h-auto img-energy-type mx-4"
            onClick={() => setType("Colorless")}
            alt="normal"
          />
          <img
            src={dragon}
            className="w-full h-auto img-energy-type mx-4"
            onClick={() => setType("Dragon")}
            alt="dragon"
          />
          <img
            src={fairy}
            className="w-full h-auto img-energy-type mx-4"
            onClick={() => setType("Fairy")}
            alt="fairy"
          />
          <img
            src={figth}
            className="w-full h-auto img-energy-type mx-4"
            onClick={() => setType("Fighting")}
            alt="figth"
          />
          <img
            src={darck}
            className="w-full h-auto img-energy-type mx-4"
            onClick={() => setType("Darkness")}
            alt="dark"
          />
        </div>
        {/*  FILA 2 */}
        <div className="w-full h-auto flex justify-center my-4 flex-wrap">
          <img
            src={fire}
            className="w-full h-auto img-energy-type mx-4"
            onClick={() => setType("Fire")}
            alt="fire"
          />

          <img
            src={grass}
            className="w-full h-auto img-energy-type mx-4"
            onClick={() => setType("Grass")}
            alt="grass"
          />
          <img
            src={electric}
            className="w-full h-auto img-energy-type mx-4"
            onClick={() => setType("Lightning")}
            alt="ligth"
          />
          <img
            src={steel}
            className="w-full h-auto img-energy-type mx-4"
            onClick={() => setType("Metal")}
            alt="metal"
          />
          <img
            src={water}
            className="w-full h-auto img-energy-type mx-4"
            onClick={() => setType("Water")}
            alt="water"
          />
        </div>
      </div>
    </>
  );
};

export default Energy;
