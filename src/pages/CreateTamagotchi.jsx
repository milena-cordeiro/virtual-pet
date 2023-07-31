import { useState } from "react";

function CreateTamagotchi(props) {
  const [tamagotchi, setTamagotchi] = useState({
    health: 100,
    happiness: 100,
    hunger: 0
  });

  const [name, setName] = useState('');
  const [type, setType] = useState('cat');

  const {history} = props;

  const createNewTamagotchi = () => {
    setTamagotchi({
      name,
      type,
      health: tamagotchi.health,
      happiness: tamagotchi.happiness,
      hunger: tamagotchi.hunger
    });

    history.push('/game')
  }

  return (
    <div>
      <h1>Bem vindo!</h1>
      <h2>Crie seu pet virtual</h2>
      <form action="">
        <label htmlFor="tamagotchi-name">Nome:
        <input type="text" value={name} id="tamagotchi-name" onChange={(e) => setName(e.target.value)}/>
        </label>
        <label htmlFor="tamagotchi-type">Qual tipo:
        <select value={type} id="tamagotchi-type" onChange={(e) => setType(e.target.value)}>
          <option value="cat">Gato</option>
          <option value="dog">Cachorro</option>
          <option value="hamster">Hamster</option>
          <option value="turtle">Tartaruga</option>
          <option value="fish">Peixe</option>
          <option value="bird">Passáro</option>
          <option value="horse">Cavalo</option>
          <option value="unicorn">Unicornio</option>
          <option value="penguin">Pinguim</option>
          <option value="rabbit">Coelho</option>
        </select>
        </label>
      </form>
      <br />
      <button type="button" onClick={createNewTamagotchi}>Start</button>
    </div>
  )

};

export default CreateTamagotchi;