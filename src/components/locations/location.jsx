export default function Location({ location }) {
  return (
    <div className='card-container'>
      <span className='card-name'>{location.name}</span>
      <span className='card-text'>{location.type}</span>
      <span className='card-text'>{location.dimension}</span>
    </div>
  );
}
