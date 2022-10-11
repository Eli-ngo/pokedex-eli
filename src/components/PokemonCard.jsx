import { Link } from "react-router-dom";

const PokemonCard = ({ name, url }) => {
    return(
        <div className="pokemonCard bg-white m-6 rounded-t-xl">
            <h2><Link to={`/${name}`}>{ name }</Link></h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.split('/').slice(-2, -1)}.png`} alt={name} />
        </div>
    )
}

export default PokemonCard;
