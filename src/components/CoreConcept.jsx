export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
