import Favlist from "components/Favlist";
import { useBookmark } from "contexts/Main";
import { useEffect, useState } from "react";

const Bookmarks = () => {
    const [pokemons, setPokemons] = useState([])
    const {bookmark, setBookmark} = useBookmark()

    const fetchPokemons = async () => {
        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
            const fetchedPokemons = await response.json();
            setPokemons(fetchedPokemons.results)
        } catch(err) {
            throw err;
        }
    }

    useEffect(() =>{
        fetchPokemons()
    }, [])
    
    return(
        <>
        {bookmark.length ? (
            <>
            {bookmark.map((poke, i) => (
                <Favlist key={i} bookmark={bookmark} setBookmark={setBookmark} pokemonFiltered={pokemons.some((pokemon) => pokemon.url.split('/').slice(-2,-1).toString() === poke.toString())} mypokemons={pokemons} id={poke}/>
            ))}
            </>
        ) : (
            'Rien'
        )}
        
        </>
    )
}

export default Bookmarks;