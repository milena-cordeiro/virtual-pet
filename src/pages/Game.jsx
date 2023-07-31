function Game() {
  const fullDate = new Date();
  const day = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear()
  return (
    <div>
      <h1>Lar do 'nome do pet'</h1>
      <h2>{`hoje é: ${day} de ${month} de ${year}`}</h2>
      <h3>{`${fullDate}`}</h3>
    </div>
  )
}

export default Game;