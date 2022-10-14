const Typesfilter = ({alltypes}) => {
    return(
        <>
            <h1>TYPES PAGE</h1>
            {alltypes.map((type, i) => (
                <div key={i}>
                    {type.name}
                </div>
            ))}
        </>
    )
}

export default Typesfilter;