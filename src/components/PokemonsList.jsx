import PokemonCard from "./PokemonCard";

const PokemonsList = ({ filter, bookmark, setBookmark }) => {
    
    return(
        <> 
            {filter.length ? (
                <div className="flex flex-col items-center">

                <div className="max-w-7xl mx-auto px-2 py-8 lg:max-w-7x1 grid grid-cols-2 gap-y-8 gap-x-8 sm:grid-cols-3 lg:grid-cols-5 xl-grid-cols-4">
                    {filter.map((pokemon, i) => (
                        <PokemonCard key={i} name={pokemon.name} url={pokemon.url} bookmark={bookmark} setBookmark={setBookmark} />
                    ))}
                </div>
            </div>
            ) : (
                <div className="mt-20 flex justify-center items-center">
                    <p>Le Pokémon que vous essayez de rechercher n'existe pas</p>
                </div>
            )}
        </>
    )
}

export default PokemonsList;