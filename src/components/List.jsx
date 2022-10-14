import PokemonCard from "./PokemonCard";

const List = ({filter}) => {

    return(
        <div className="flex flex-col items-center">

            <div className="max-w-7xl mx-auto px-2 py-8 lg:max-w-7x1 grid grid-cols-2 gap-y-8 gap-x-8 sm:grid-cols-3 lg:grid-cols-5 xl-grid-cols-4">
                {filter.map((pokemon, i) => (
                    <PokemonCard key={i} name={pokemon.name} url={pokemon.url} />
                ))}
            </div>
        </div>
    )
}

export default List;