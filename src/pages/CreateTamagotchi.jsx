import { useState, useContext } from "react";
import TamagotchiContext from "../context/Context";
import CardAnimal from "../components/CardAnimal";

function CreateTamagotchi(props) {
  const globalState = useContext(TamagotchiContext);

  const [name, setName] = useState('');
  const [type, setType] = useState('cat');

  const {history} = props;

  const createNewTamagotchi = () => {
    globalState.setTamagotchi({
      ...globalState.tamagotchi,
      name,
      type
    });

    history.push('/game');
  }

  return (
    <div>
      <h1>Bem vindo!</h1>
      <h2>Crie seu pet virtual</h2>
      <CardAnimal type={type}/>
      <form action="">
        <label htmlFor="tamagotchi-name">Nome:
          <input type="text" value={name} id="tamagotchi-name" onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="tamagotchi-type">Qual tipo:
          <select value={type} id="tamagotchi-type" onChange={(e) => setType(e.target.value)}>
            <option value="cat">Gato</option>
            <option value="dog">Cachorro</option>
            <option value="mouse">Hamster</option>
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