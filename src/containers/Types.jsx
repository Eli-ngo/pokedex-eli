import { useState, useEffect } from "react";
import Typesfilter from '../components/Typesfilter';

const Types = () => {
    const [ types, setTypes ] = useState([]);

    const fetchTypes = async () => {
        try{
            const response = await fetch("https://pokeapi.co/api/v2/type");
            const fetchedTypes = await response.json();

            setTypes(fetchedTypes.results);
            
        } catch(err){
            throw err;
        }
    }

    useEffect(() => {
        fetchTypes();
    }, [])

    return(
        <> 
            <Typesfilter alltypes={types}/>
        </>
    )
}

export default Types;