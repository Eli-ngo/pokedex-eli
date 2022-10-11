const PokemonCard = ({ name, url }) => {
    return(
        <div className="pokemonCard bg-white m-6 rounded-t-xl">
            <h2>{ name }</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.split('/').slice(-2, -1)}.png`} alt={name} />
        </div>
    )
}

export default PokemonCard;