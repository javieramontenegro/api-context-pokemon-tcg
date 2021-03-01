import React, { useContext, useEffect, useState } from "react";
import { CardsContext } from "../../context/CardsContext";
import grass from "../../assets/img/e_grass.png";
import normal from "../../assets/img/e_normal.png";
import darck from "../../assets/img/e_darck.png";
import dragon from "../../assets/img/e_dragon.png";
import fairy from "../../assets/img/e_fairy.png";
import figth from "../../assets/img/e_figth.png";
import fire from "../../assets/img/e_fire.png";
import ligth from "../../assets/img/e_ligth.png";
import metal from "../../assets/img/e_metal.png";
import psy from "../../assets/img/e_psy.png";
import water from "../../assets/img/e_water.png";
import "../../assets/css/styles.css";
const Modals = ({
  namePoke,
  pokeImg,
  pokeHp,
  typeEnergy,
  markerNormal,
  marketHolo,
  markerRever,
  pokeAttack,
  pokeWeak,
  pokeResis,
  pokeRetreat,
}) => {
  const { showModal, setShowModal } = useContext(CardsContext);
  const [srcEnergy, setSrcEnergy] = useState("");
  useEffect(() => getEnergy(typeEnergy), []);
  console.log(pokeRetreat);
  const handleCancel = (e) => {
    console.log(e);
    setShowModal(false);
  };
  const getEnergy = (energy) => {
    if (energy === "Grass") {
      setSrcEnergy(grass);
    }
    if (energy === "Colorless") {
      setSrcEnergy(normal);
    }
    if (energy === "Darkness") {
      setSrcEnergy(darck);
    }
    if (energy === "Dragon") {
      setSrcEnergy(dragon);
    }
    if (energy === "Fairy") {
      setSrcEnergy(fairy);
    }
    if (energy === "Fighting") {
      setSrcEnergy(figth);
    }
    if (energy === "Fire") {
      setSrcEnergy(fire);
    }
    if (energy === "Lightning") {
      setSrcEnergy(ligth);
    }
    if (energy === "Metal") {
      setSrcEnergy(metal);
    }
    if (energy === "Psychic") {
      setSrcEnergy(psy);
    }
    if (energy === "Water") {
      setSrcEnergy(water);
    }
  };
  return (
    <>
      <div className="w-full h-auto flex justify-end">
        <button
          className="font-bold py-2 px-4 btn-close"
          variant="secondary"
          onClick={handleCancel}
          style={{ backgroundColor: "white", borderRadius: "100%" }}
        >
          X
        </button>
      </div>
      <div className="w-full h-full flex  flex-col md:flex-row justify-between">
        {/*   IMG */}
        <div className="relative w-full md:w-2/5 h-full flex flex-wrap justify-center md:justify-start wrapper-img">
          <img src={pokeImg} className="w-full h-auto img-poke-modal" />
        </div>
        {/* COLUMNA 2 */}
        <div className="relative w-full md:w-3/5 h-full flex flex-col justify-between flex-wrap">
          <div className="w-full h-auto flex flex-col justify-between">
            {/*  NOMBRE */}
            <div className="w-full h-auto flex justify-between my-4">
              <h1 className="text-3xl text-white font-bold">{namePoke}</h1>
              <div className="w-1/2 h-auto flex justify-end items-center">
                <h1 className="text-2xl text-white font-bold mr-2">
                  HP {pokeHp}
                </h1>

                <img src={srcEnergy} className="w-full h-auto img-energy" />
              </div>
            </div>
            <hr></hr>
            {/*  PRECIOS */}
            <div className="w-full h-auto flex justify-between my-4">
              <h4 className="text-2xl text-white font-bold">Prices</h4>
            </div>
            {/*  ROW CANTIDAD */}
            <div className="w-full h-auto flex justify-between mb-4">
              {markerNormal !== null && (
                <div className="w-1/3 h-auto flex flex-col">
                  <p className="text-lg text-white font-semibold ">
                    Normal Market
                  </p>
                  <p className="text-base text-white font-base ">
                    $ {markerNormal}
                  </p>
                </div>
              )}
              {marketHolo !== null && (
                <div className="w-1/3 h-auto flex flex-col">
                  <p className="text-lg text-white font-semibold ">
                    Holofoil Market
                  </p>
                  <p className="text-base text-white font-base ">
                    $ {marketHolo}
                  </p>
                </div>
              )}
              {markerRever !== null && (
                <div className="w-1/3 h-auto flex flex-col">
                  <p className="text-lg text-white font-semibold ">
                    ReverseHolofoil Market
                  </p>
                  <p className="text-base text-white font-base ">
                    $ {markerRever}
                  </p>
                </div>
              )}
            </div>
            <hr></hr>
            {/* ATAQUES */}
            <div className="w-full h-auto flex justify-between my-4">
              <h4 className="text-2xl text-white font-bold">Attacks</h4>
            </div>

            {pokeAttack.map((poke) => {
              const { name, text } = poke;
              return (
                <div className="w-full h-auto flex flex-col my-2">
                  <p className="text-lg text-white font-semibold">{name}</p>
                  <p className="text-base text-white font-base">{text}</p>
                </div>
              );
            })}
            <hr></hr>
            {/*  WEAKNESS, RESISTANCE , COST */}
            <div className="w-full h-auto flex justify-between mt-2">
              {pokeWeak && (
                <>
                  <div className="w-1/3 h-auto">
                    <h4 className="text-2xl text-white font-bold">
                      Weaknesses
                    </h4>
                    <p className="text-lg text-white ">
                      {pokeWeak.type}
                      {pokeWeak.value}
                    </p>
                  </div>
                </>
              )}
              {pokeResis && (
                <>
                  <div className="w-1/3 h-auto">
                    <h4 className="text-2xl text-white font-bold">
                      Resistances
                    </h4>
                    <p className="text-lg text-white ">
                      {pokeResis.type}
                      {pokeResis.value}
                    </p>
                  </div>
                </>
              )}
              {pokeRetreat && (
                <>
                  <div className="w-1/3 h-auto">
                    <h4 className="text-2xl text-white font-bold">
                      Resistances
                    </h4>
                    <p className="text-lg text-white ">
                      {pokeRetreat[0]} x {pokeRetreat.length}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
