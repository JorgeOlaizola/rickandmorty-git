export default function Location({ location }) {
  return (
    <div>
      <span>{location.name}</span>
      <span>{location.type}</span>
      <span>{location.dimension}</span>
    </div>
  );
}
