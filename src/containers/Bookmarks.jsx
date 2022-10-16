import BookmarksList from "components/BookmarksList";
import { useBookmark } from "contexts/Main";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

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
            <Helmet>
                <title>Pokédex React | Favoris</title>
            </Helmet>
            
            <div className="flex justify-center items-center flex-col"> 
                <h1 className="text-bold text-3xl mt-16">Pokémons favoris ({bookmark.length})</h1>
                <div className="flex flex-wrap justify-center items-center p-14">
                    {bookmark.length ? (
                        <>
                            {bookmark.map((poke, i) => (
                                <BookmarksList key={i} bookmark={bookmark} setBookmark={setBookmark} pokemonFiltered={pokemons.some((pokemon) => pokemon.url.split('/').slice(-2,-1).toString() === poke.toString())} mypokemons={pokemons} id={poke}/>
                            ))}
                        </>
                    ) : (
                        'Aucun Pokémon dans les favoris'
                    )}
                    
                </div>
                <Link to='/' className=" border-2 border-rose-500 text-rose-500 font-bold px-6 py-1 rounded-md mt-2 mb-16">Retour</Link>
            </div>
        </>
    )
}

export default Bookmarks;