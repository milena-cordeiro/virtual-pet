export default function CardAnimal(type) {
  return (
    <div>
      <img src={`/assets/${type.type}.gif`} alt={type.type} style={{maxWidth: "400px"}}/>
    </div>
  )
}