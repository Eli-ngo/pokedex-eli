import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import List from "../components/List";
import Loading from "../components/Loading";

const Pokemons = () => {
    const [ pokemons, setPokemons ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ searchParams, setSearchParams ] = useSearchParams();

    const searchPokemon = searchParams.get('search') || '';

    const handleSearch = event => {
        const search = event.target.value;

        if(search){
            setSearchParams({ search });
        }else{
            setSearchParams({});
        }
    }

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
        if(searchPokemon === ''){
            return element
        }else{
            return element.name.toLowerCase().includes(searchPokemon.toLowerCase());
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
            <h1>Liste de pokémons</h1>
            <form>
                <input className="border-2 border-rose-500" type="text" value={searchPokemon} onChange={handleSearch}/>
            </form>
            {loading ? <List search={searchPokemon} filter={filteredPokemons} handle={handleSearch}/> : <Loading /> }
        </>
    )
}

export default Pokemons;