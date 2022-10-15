const Typesfilter = ({alltypes}) => {

    const handleType = (e) => {
        let typePokemon = e.target.value;
        console.log(typePokemon);
    }

    return(
        <>
            <h1>TYPES PAGE</h1>
            {alltypes.map((type, i) => (
                <div key={i}>
                    <button onClick={handleType}>{type.name}</button>
                </div>
            ))}
        </>
    )
}

export default Typesfilter;