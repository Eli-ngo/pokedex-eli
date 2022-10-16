import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Pokemon = () => {
    const { slug } = useParams();
    const [ pokemon, setPokemon ] = useState([]);
    const [ loading, setLoading ] = useState(true);


    const fetchPokemon = async () => {
        try{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);
            const fetchedPokemon = await res.json();
            
            setLoading(false)
            setPokemon(fetchedPokemon);


        } catch(err){
            setLoading(false);
            throw err;
        }
    }

    

    useEffect(() => {
        setTimeout(() => {
            fetchPokemon();
        }, 1000)
    }, [])

    return (
        <div className="flex justify-center items-center p-20 flex-col">
            {loading ? <Loading /> : 
            <>
                {pokemon.id ? (
                    <>
                        <div className="bg-white flex flex-col justify-center items-center py-10 shadow-lg rounded-3xl mb-4">
                            <p>n°{pokemon.id}</p>
                            <p className="capitalize text-2xl font-bold">{pokemon.name}</p>
                            <img className="w-2/5" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
                            <div className="flex gap-3 mb-8">
                                {pokemon.types.map((type, i) => (
                                    <div key={i} className={`capitalize px-4  rounded-md font-bold bg-${type.type.name}`}>
                                        {type.type.name}
                                    </div>
                                ))}
                            </div>
                            <div className="w-3/5">
                                <div className="flex flex-row justify-between items-between mb-6">
                                    <div>
                                        <h2 className="font-bold text-nav">Taille</h2>
                                        <p>{pokemon.height} cm</p>

                                    </div>
                                    <div>
                                        <h2 className="font-bold text-nav">Poids</h2>
                                        <p>{pokemon.weight} kg</p>

                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h2 className="font-bold text-nav">Capacités</h2>
                                    <div className="flex justify-between">
                                        {pokemon.abilities.slice(0,3).map((ability, i) => (
                                        <div key={i}>
                                            {ability.ability.name}
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="font-bold text-nav">Statistiques</h2>
                                    {pokemon.stats.map((stat, i) => (
                                        <div key={i}>
                                            {stat.stat.name} : {stat.base_stat}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Link to='/' className="border-2 border-rose-500 text-rose-500 font-bold px-6 py-1 rounded-md mt-14">Retour</Link>
                    </>
                ) : (
                    <>
                        <p>Ce Pokémon n'existe pas, veuillez chercher un autre Pokémon</p>
                        <Link to='/' className="border-2 border-rose-500 text-rose-500 font-bold px-6 py-1 rounded-md mt-14">Retour</Link>
                    </>
                )}
            </>
            }

            
        </div>
    );
}

export default Pokemon;