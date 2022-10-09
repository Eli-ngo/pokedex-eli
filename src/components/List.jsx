import { useSearchParams } from "react-router-dom";

import PokemonsList from "containers/PokemonsList";

const List = () => {
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

    return(
        <div className="flex flex-col items-center">
            <h1>Liste de pokémons</h1>
            <form>
                <input className="border-2 border-rose-500" type="text" value={searchPokemon} onChange={handleSearch}/>
            </form>
            <PokemonsList search={searchPokemon}/>
        </div>
    )
}

export default List;