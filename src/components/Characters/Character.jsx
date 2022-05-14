import './characters.css'

export default function Character({ character }) {
  return (
    <div className='character-container'>
      <span  className='character-name' >{character.name}</span>
      <img className='character-image' src={character.image} alt="Character img" />
      <span className='character-species' >{character.species}</span>
    </div>
  );
}
