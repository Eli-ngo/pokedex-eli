import { useState, useEffect } from "react";
import Typesfilter from '../components/Typesfilter';
import { Helmet } from "react-helmet";
import PokemonCard from "components/PokemonCard";
import { useBookmark } from "contexts/Main";

const Types = () => {
    const [ pokemons, setPokemons ] = useState([]);
    const [ types, setTypes ] = useState([]);
    const { bookmark, setBookmark } = useBookmark()

    const fetchTypes = async () => {
        try{
            const response = await fetch("https://pokeapi.co/api/v2/type");
            const fetchedTypes = await response.json();

            setTypes(fetchedTypes.results);
            
        } catch(err){
            throw err;
        }
    }

    const fetchPokemons = async (typeName) => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}/`);
            const fetchedPokemons = await response.json();
            
            setPokemons(fetchedPokemons.pokemon)
        } catch(err) {
            throw err;
        }
    }

    useEffect(() => {
        fetchTypes();
    }, [])

    return(
        <> 
            <Helmet>
            <title>Pokédex React | Types</title>
            </Helmet>

            <div className="flex flex-col justify-center items-center p-16"> 
                <h1 className="text-bold text-3xl mb-10">Filtre par types</h1>
                <Typesfilter alltypes={types} fetchPokemons={fetchPokemons}/>
                {pokemons ? (
                    <>{pokemons.map((poke, i) => (
                        <PokemonCard key={i} name={poke.pokemon.name} url={poke.pokemon.url} bookmark={bookmark} setBookmark={setBookmark}/> 
                    ))}</>
                ) : (
                    'aucun pokemon'
                )}
            </div>
        </>
    )
}

export default Types;