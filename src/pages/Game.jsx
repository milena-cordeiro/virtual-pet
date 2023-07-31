import { useContext, useEffect } from "react";
import TamagotchiContext from "../context/Context";

function Game() {
  const fullDate = new Date();
  const day = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear()

  const {tamagotchi, setTamagotchi} = useContext(TamagotchiContext);

  useEffect(()=>{
   if (tamagotchi) {
    const interval = setInterval(() => {
      setTamagotchi((prevState) => ({
        ...prevState,
        hunger: Math.min(prevState.hunger + 2, 100),
        happiness: Math.max(prevState.happiness - 2, 0),
        health: Math.max(prevState.health - 1, 0)
      }));
    }, 5000);
    return () => clearInterval(interval);
   }
  }, [ tamagotchi, setTamagotchi ]);



  const feedPet = () => {
    setTamagotchi((prevState) => ({
      ...prevState,
      hunger: Math.max(prevState.hunger - 10, 0),
      happiness: Math.min(prevState.happiness + 3, 100),
      health: Math.min(prevState.health + 5, 100),
    }))}


  const playWithPet = () => {
    setTamagotchi((prevState) => ({
      ...prevState,
      happiness: Math.min(prevState.happiness + 10, 100),
      health: Math.min(prevState.health + 3, 100),
    }))
  }

  return (
    <div>
      <h1>{`Bem-vindo ao lar de ${tamagotchi.name}`}</h1>
      <h2>{`hoje é: ${day} de ${month} de ${year}`}</h2>
      <h3>{`${fullDate}`}</h3>

      <div>
        <h3>Status do seu pet:</h3>
        <h2>{`${tamagotchi.type}`}</h2>
        <ul>
          <li>{`saúde: ${tamagotchi.health}`}</li>
          <li>{`felicidade: ${tamagotchi.happiness}`}</li>
          <li>{`fome: ${tamagotchi.hunger}`}</li>
        </ul>
      </div>

      <div>
        <button type="button" onClick={playWithPet}>Brincar</button>
        <button type="button" onClick={feedPet}>Alimentar</button>
      </div>
    </div>
  )
}

export default Game;