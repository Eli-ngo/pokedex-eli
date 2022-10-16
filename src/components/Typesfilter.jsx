const Typesfilter = ({ alltypes }) => {

    const handleType = (e) => {
        let typePokemon = e.target.value;
        console.log(typePokemon)
    }

    return(
        <div>
            <div className="flex flex-wrap justify-center gap-5">
                {alltypes.slice(0,18).map((type, i) => (
                    <div key={i} className={`capitalize px-4 rounded-md bg-${type.name}`}>
                        <button onClick={handleType} value={type.name}>{type.name}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Typesfilter;