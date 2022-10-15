import PokemonCard from "./PokemonCard"

const BookmarksList = ({ pokemonFiltered, bookmark, setBookmark, mypokemons, id }) => {

    const mypokemonsFiltered = mypokemons.filter((poke) => poke.url.split('/').slice(-2, -1).toString() === id.toString())
    
    return(
        <div className="flex flex-col items-center">
            {pokemonFiltered ? (
                <>
                    <PokemonCard name={mypokemonsFiltered[0].name} url={mypokemonsFiltered[0].url} bookmark={bookmark} setBookmark={setBookmark}/>
                </>
            ) : (
                'Aucun Pokémon'
            )}
            
        </div>
    )
}


export default BookmarksList