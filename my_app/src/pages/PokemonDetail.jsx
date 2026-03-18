import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function PokemonDetail() {
    const { id } = useParams(); // website/pokemon/1  => 1 because on App.js, we use /pokemon/:id
    const [pokemon, setPokemon] = useState();
    const [error, setError] = useState();

    useEffect( () => {
        async function loadPokemon() {
          let randNum
                if (id) {
                  randNum = id
                } else{
                  randNum = Math.floor(Math.random()*1025)
                }
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`);
          const data = await response.json();
          setPokemon(data)

          if (error) {return (<p>Error</p>);}
          if (!pokemon) {return <p>Loading...</p>}
        }
 
        loadPokemon();
    }, []);
    return(
        <>
            {!pokemon ? (<p>Loading...</p>) : (
                <h1>{pokemon.name}</h1>
            )}
        </>
    )

}