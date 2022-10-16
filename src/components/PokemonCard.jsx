import { Link } from "react-router-dom";
import Like from "./Like";

const PokemonCard = ({ name, url, bookmark, setBookmark }) => {
    if(url.split('/').slice(-2, -1).toString() > 151){
        return false
    }

    return(
        <>
            <div className="pokemonCard bg-white m-4 p-6 rounded-3xl shadow-lg flex justify-center items-center flex-col">
                <Like setBookmark={setBookmark} bookmark={bookmark} id={url.split('/').slice(-2, -1).toString()} isBookmarked={bookmark.some((booked) => booked.toString() === url.split('/').slice(-2, -1).toString())}/>
                <Link to={`/${name}`} className="flex justify-center items-center flex-col">
                    <img className="w-8/12 h-8/12" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.split('/').slice(-2, -1)}.png`} alt={name} />
                    <p>N°{url.split('/').slice(-2, -1)}</p>
                    <h2 className="text-xl font-bold capitalize">{ name }</h2>
                </Link>
            </div>
        </>
    )
}

export default PokemonCard;
