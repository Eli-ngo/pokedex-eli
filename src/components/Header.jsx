import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <nav>
                <Link to="/pokemons">Pokémons</Link>
                <Link to="/bookmarks">Favoris</Link>
            </nav>
        </>
    )
}

export default Header;