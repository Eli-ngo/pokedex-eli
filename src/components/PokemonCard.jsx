const PokemonCard = ({ name, url }) => {
    console.log(url.split('/').slice())
    return(
        <div className="pokemonCard bg-red-300 m-6">
            <h2>{ name }</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${url.split('/').slice(-2, -1)}.png`} alt={name} />
        </div>
    )
}

export default PokemonCard;