import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react";

const Alltypes = () => {
    const [ types, setTypes ] = useState([]);

    const fetchTypes = async () => {
        try{
            const response = await fetch("https://pokeapi.co/api/v2/type");
            const fetchedTypes = await response.json();

            setTypes(fetchedTypes.results);
            console.log(fetchedTypes)
            
        } catch(err){
            throw err;
        }
    }

    useEffect(() => {
        fetchTypes();
    }, [])

    return(
        <> 
            {types.map((type, i) => (
                <div key={i}>
                    {type.name}
                </div>
            ))}
        </>
    )
}

export default Alltypes;