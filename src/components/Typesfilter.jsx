const Typesfilter = ({ alltypes, fetchPokemons }) => {

    const handleType = (typeName) => {
        fetchPokemons(typeName)
    }

    return(
        <div>
            <div className="flex flex-wrap justify-center gap-5">
                {alltypes.slice(0,18).map((type, i) => (
                    <div key={i} className={`capitalize px-4 py-1 rounded-md bg-${type.name}`}>
                        <button onClick={() => handleType(type.name)} className="capitalize text-white">{type.name}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Typesfilter;