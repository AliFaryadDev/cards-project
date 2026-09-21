function Card(props){
  const [isAdded, setIsAdded] = React.useState(false);

  const handleClick = () => {
    if (!isAdded) {
      props.onAdd();
      setIsAdded(true);
    }
  };
  return(
    <div className="card">
    <img src={props.img} alt={props.alttext}></img>
    <h3>{props.title}</h3>
    <p>{props.price}</p>
    <button onClick={handleClick} disabled={isAdded}>
        {isAdded ? "Added" : props.btntext}
      </button>
    </div>)
}