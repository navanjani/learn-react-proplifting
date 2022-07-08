import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AddPokemon from "./AddPokemon";
import PokemonRow from "./PokemonRow";

const PokemonListPage = (params) => {
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);

  const getPokemons = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      //   console.log(response);
      const pokemonsWithScore = response.data.results.map((pokemon, index) => {
        return { ...pokemon, score: 0, id: index + 1 };
      });

      setPokemons(pokemonsWithScore);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getPokemons();
  }, []);

  //   INCREMENT SCORE

  const incrementScore = (id) => {
    console.log(id);
    const newPokemons = pokemons.map((pokemon, index) => {
      if (pokemon.id === id) {
        return { ...pokemon, score: pokemon.score + 1 };
      } else {
        return pokemon;
      }
    });
    setPokemons(newPokemons);
  };

  //   ADD POKEMON

  const addPokemon = (name) => {
    setPokemons([
      ...pokemons,
      { id: pokemons.length + 1, name: name, score: 0 },
    ]);
  };

  return (
    <div>
      <h1>Pokemon List</h1>
      <AddPokemon addPokemon={addPokemon} />
      {pokemons
        ? pokemons.map((pokemon, index) => (
            <PokemonRow
              id={pokemon.id}
              key={index}
              name={pokemon.name}
              score={pokemon.score}
              incrementScore={incrementScore}
            />
          ))
        : "Loading..."}
    </div>
  );
};

export default PokemonListPage;
