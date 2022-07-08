const PokemonRow = ({ name, score, incrementScore, id }) => {
  return (
    <div className="pokemon-row">
      <p> Name : {name} </p>
      <p>Score :{score} </p>
      <button className="btn btn-sm" onClick={() => incrementScore(id)}>
        {" "}
        +{" "}
      </button>
      <button className="btn btn-sm"> - </button>
    </div>
  );
};

export default PokemonRow;
