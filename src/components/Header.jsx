import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <nav className="h-16 bg-red-700 flex justify-center items-center gap-5 text-white">
                <h1>Pokédex</h1>
                <Link to="/">Pokémons</Link>
                <Link to="/bookmarks">Favoris</Link>
            </nav>
        </>
    )
}

export default Header;