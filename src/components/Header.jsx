import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <nav className="h-16 bg-rose-600 flex justify-center items-center gap-5 text-white">
                <h1>Pokédex</h1>
                <Link to="/">Pokémons</Link>
                <Link to="/types">Types</Link>
                <Link to="/bookmarks">Favoris</Link>
            </nav>
        </>
    )
}

export default Header;