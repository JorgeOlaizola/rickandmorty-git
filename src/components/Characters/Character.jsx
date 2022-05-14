export default function Character({ character }) {
  return (
    <div>
      <span>{character.name}</span>
      <img src={character.image} alt="Character img" />
      <span>{character.species}</span>
    </div>
  );
}
