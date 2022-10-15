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
        <div className="flex flex-col justify-center items-center p-16"> 
            <h1>Filtre par types</h1>
            <Typesfilter alltypes={types}/>
        </div>
    )
}

export default Types;