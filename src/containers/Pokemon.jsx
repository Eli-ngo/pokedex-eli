import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Pokemon = () => {
    const { slug } = useParams();
    const [ pokemon, setPokemon ] = useState([]);
    const [ loading, setLoading ] = useState(false);


    const fetchPokemon = async () => {
        try{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);
            const fetchedPokemon = await res.json();
            
            setLoading(true)
            setPokemon(fetchedPokemon);
        } catch(err){
            setLoading(true);
            throw err;
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fetchPokemon();
        }, 1000)
    }, [])

    return (
        <>
            {loading ? <div>
                <p>Nom : {pokemon.name}</p>
                <p>ID : {pokemon.id}</p>
                <p>Taille : {pokemon.height} cm</p>
                <p>Poids : {pokemon.weight} kg</p>
                <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                {pokemon.abilities.map((ability, i) => (
                    <div key={i}>
                        Capacités : {ability.ability.name}
                    </div>
                ))}
                {pokemon.types.map((type, i) => (
                    <div key={i}>
                        Types : {type.type.name}
                    </div>
                ))}
            </div> : <Loading /> }

            <Link to='/'>Retour à l'accueil</Link>
        </>
    );
}

export default Pokemon;


// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// const Pokemon = () => {
//     const { slug } = useParams();

//     const [ pokemons, setPokemons ] = useState([]);

//     const fetchPokemons = async () => {
//         try{
//             const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
//             const fetchedPokemons = await response.json();

//             setPokemons(fetchedPokemons);
//         } catch(err) {
//             throw err;
//         }
//     }


//     const poke = pokemons.find((pok) => {
//         return (
//         slug ===
//         pok.name
//         );
//     });

//     useEffect(() => {
//         fetchPokemons();
//     }, []);

//     if (!poke) return "Error 404";

//     return (
//         <div>
//         <h1>{poke.name}</h1>
//         </div>
//     );
// }

// export default Pokemon;
