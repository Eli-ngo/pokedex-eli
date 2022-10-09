import { useEffect, useState } from "react";

import Pokemon from "../components/Pokemon";

const PokemonsList = () => {
    const [ pokemons, setPokemons ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const fetchPokemons = async () => {
        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
            const fetchedPokemons = await response.json();

            setPokemons(fetchedPokemons.results);
            setIsLoading(false);
        } catch(err) {
            setError(error);
            setIsLoading(false);
            throw err;
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, []);

    if(isLoading) return "Chargement..."
    if(error) return error;

    if(pokemons.length === 0){
        return <p>Aucun Pokémon</p> 
    }

    return(
        <>
            <div>
                {pokemons.map((pokemon, i) => (
                    <Pokemon key={i} name={pokemon.name} id={i} />
                ))}
            </div>
        </>
    )
}

export default PokemonsList;