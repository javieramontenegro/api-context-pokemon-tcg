import React, { useState, useContext } from "react";
import { CardsContext } from "../../context/CardsContext";
import "../../assets/css/styles.css";
import Button from "../Common/Button";
import Modals from "../Common/Modals";

const Cards = ({ cards }) => {
  const { showModal, setShowModal } = useContext(CardsContext);
  console.log(cards);
  const [maxValue, setMaxValue] = useState(15);
  const [pokeName, setPokeName] = useState("");
  const [pokeImg, setPokeImg] = useState("");
  const [pokeHp, setPokeHp] = useState("");
  const [pokePriceNormalHolo, setPokePriceNormalHolo] = useState(null);
  const [pokePriceNormalRever, setPokePriceNormalRever] = useState(null);
  const [pokePriceNormalNormal, setPokePriceNormalNormal] = useState(null);
  const [pokeAttack, setPokeAttack] = useState(null);
  const [pokeWeak, setPokeWeak] = useState(null);
  const [pokeResis, setPokeResis] = useState(null);
  const [pokeRetreat, setPokeRetreat] = useState(null);
  const [typeEnergy, setTypeEnergy] = useState("");

  const loadMore = () => {
    setMaxValue(maxValue + maxValue);
  };
  const showModals = (item) => {
    console.log("en funcion ", item.types[0]);
    setPokeName(item.name);
    setPokeImg(item.images.large);
    setPokeHp(item.hp);
    setTypeEnergy(item.types[0]);
    if (item.tcgplayer.prices.holofoil) {
      setPokePriceNormalHolo(item.tcgplayer.prices.holofoil.market);

      console.log("normal", pokePriceNormalHolo);
    } else {
      setPokePriceNormalHolo(null);
    }
    if (item.tcgplayer.prices.reverseHolofoil) {
      setPokePriceNormalRever(item.tcgplayer.prices.reverseHolofoil.market);
    } else {
      setPokePriceNormalRever(null);
    }
    if (item.tcgplayer.prices.normal) {
      setPokePriceNormalNormal(item.tcgplayer.prices.normal.market);
    } else {
      setPokePriceNormalNormal(null);
    }
    if (item.weaknesses) {
      setPokeWeak(item.weaknesses[0]);
    } else {
      setPokeWeak(null);
    }
    if (item.resistances) {
      setPokeResis(item.resistances[0]);
    } else {
      setPokeResis(null);
    }
    if (item.retreatCost) {
      setPokeRetreat(item.retreatCost);
    } else {
      setPokeRetreat(null);
    }
    setPokeAttack(item.attacks);
    setShowModal(true);
  };
  const handleCancel = (e) => {
    console.log(e);
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <Modals
          namePoke={pokeName}
          pokeImg={pokeImg}
          pokeHp={pokeHp}
          typeEnergy={typeEnergy}
          marketHolo={pokePriceNormalHolo}
          markerRever={pokePriceNormalRever}
          markerNormal={pokePriceNormalNormal}
          pokeAttack={pokeAttack}
          pokeWeak={pokeWeak}
          pokeResis={pokeResis}
          pokeRetreat={pokeRetreat}
        />
      ) : (
        <>
          <div className="flex flex-wrap justify-center">
            {cards.slice(0, maxValue).map((poke) => {
              const { images, id } = poke;

              return (
                <>
                  <div
                    className="mx-4 my-4 img-card"
                    onClick={() => showModals(poke)}
                    key={id}
                  >
                    <img
                      src={images.large}
                      className="w-full h-auto img-card "
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className=" w-full h-full flex justify-center my-8">
            {maxValue <= cards.length && <Button loadMore={loadMore} />}
          </div>
        </>
      )}
    </>
  );
};

export default Cards;
