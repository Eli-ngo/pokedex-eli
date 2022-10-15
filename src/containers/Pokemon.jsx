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
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
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
                {pokemon.stats.map((stat, i) => (
                    <div key={i}>
                        {stat.stat.name} : {stat.base_stat}
                    </div>
                ))}
            </div> : <Loading /> }

            <Link to='/'>Retour à l'accueil</Link>
        </>
    );
}

export default Pokemon;
