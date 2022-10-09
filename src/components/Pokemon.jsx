const Pokemon = ({id, name}) => {
    return(
        <div className="pokemonCard bg-red-300 m-6">
            <h2>{ name }</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id+1}.png`} alt={name} />
        </div>
    )
}

export default Pokemon;