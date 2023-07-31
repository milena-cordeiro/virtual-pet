import { useState } from "react";
import TamagotchiContext from "./Context";

export default function Provider({ children }) {
  const [loading, setLoading] = useState(false);
  const [tamagotchi, setTamagotchi] = useState({
    health: 100,
    happiness: 100,
    hunger: 0
  });

  const values = {
    tamagotchi,
    setTamagotchi,
    loading,
    setLoading
  };

  return (
    <TamagotchiContext.Provider value={values}>
        {children}
    </TamagotchiContext.Provider>
  );
}