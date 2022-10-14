import { Link } from "react-router-dom";

const PokemonCard = ({ name, url }) => {

    return(
        <div className="pokemonCard bg-white m-4 p-6 rounded-3xl shadow-lg flex justify-center items-center flex-col">
            <button>Favoris</button>
            <img className="w-8/12 h-8/12" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.split('/').slice(-2, -1)}.png`} alt={name} />
            <p>N°{url.split('/').slice(-2, -1)}</p>
            <h2 className="text-xl font-bold"><Link to={`/${name}`}>{ name }</Link></h2>
        </div>
    )
}

export default PokemonCard;
