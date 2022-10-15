import { useBookmark } from "contexts/Main";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet"

import PokemonsList from "../components/PokemonsList";
import Loading from "../components/Loading";

const Pokemons = () => {
    const [ pokemons, setPokemons ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const { bookmark, setBookmark } = useBookmark()

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
            setLoading(false);
        } catch(err) {
            setError(error);
            setLoading(false);
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
            <Helmet>
            <title>Pokédex React | Home</title>
            </Helmet>
            
            <div className="flex justify-center items-center flex-col">
                <form className="bg-grey w-full h-16 flex justify-center items-center">
                    <input className="border-2 w-1/4 h-10 rounded-lg p-3 focus:outline-none" type="text" placeholder="Chercher un Pokémon par son nom" value={searchPokemon} onChange={handleSearch}/>
                </form>
                {loading ? <Loading /> : <PokemonsList search={searchPokemon} filter={filteredPokemons} handle={handleSearch} bookmark={bookmark} setBookmark={setBookmark} />}
            </div>
        </>
    )
}

export default Pokemons;