import { useState, useEffect } from 'react'
import styles from "./PokemonCard.module.css"
 
export default function PokemonCard(props) {
    const [pokemon, setPokemon] = useState();
    let sprite;
    useEffect( () => {
        async function loadPokemon() {
          let randNum
                if (props.num) {
                  randNum = props.num
                } else{
                  randNum = Math.floor(Math.random()*1025)
                }
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`);
          const data = await response.json();
          setPokemon(data)
        }
 
        loadPokemon();
    }, []);
 
    return (
        <>
            {!pokemon ? (
                <p>Loading</p>
            ) : (
              <div className={styles.card}>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <div className={styles.imgContainer}>
                  
                  <img src={Math.random() < .10 ? sprite = pokemon.sprites.front_shiny : sprite = pokemon.sprites.front_default } alt={pokemon.name} />

                  

                </div>
                <p>{pokemon.types[0].type.name}</p>
                {pokemon.stats.map( (stat) => (
                  <p>{stat.stat.name} - {stat.base_stat} </p>
                ))}
                {console.log(pokemon.stats[0])}
              </div>
            )}
        </>
    )
}