import { useEffect, useState } from "react";

import PokemonCard from "../components/PokemonCard";
import Loading from "../components/Loading";

const Pokemons = ({search}) => {
    const [ pokemons, setPokemons ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const fetchPokemons = async () => {
        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
            const fetchedPokemons = await response.json();

            setPokemons(fetchedPokemons.results);
            setLoading(true);
        } catch(err) {
            setError(error);
            setLoading(true);
            throw err;
        }
    }

    const filteredPokemons = pokemons.filter((element) => {
        if(search === ''){
            return element
        }else{
            return element.name.toLowerCase().includes(search.toLowerCase());
        }

    })

    useEffect(() => {
        setTimeout(() => {
            fetchPokemons();
        }, 1000)
    }, []);

    if(error) return error;

    return(
        <>
            {loading ? <div className="max-w-7xl mx-auto px-2 py-8 lg:max-w-7x1 grid grid-cols-2 gap-y-8 gap-x-8 sm:grid-cols-3 lg:grid-cols-5 xl-grid-cols-4">
                {filteredPokemons.map((pokemon, i) => (
                    <PokemonCard key={i} name={pokemon.name} url={pokemon.url} />
                ))}
            </div> : <Loading /> }
        </>
    )
}

export default Pokemons;