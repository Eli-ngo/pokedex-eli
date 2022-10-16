import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <nav className="h-14 bg-nav px-14 flex justify-between items-center gap-5 text-white">
                <div>
                    <h1>
                        <a href="/">
                            <img src="logo.svg" alt="logo" />
                        </a>
                    </h1>
                </div>
                <div className="flex gap-5">
                    <Link className="font-bold" to="/">Pokémons</Link>
                    <Link className="font-bold" to="/types">Types</Link>
                    <Link className="font-bold" to="/bookmarks">Favoris</Link>
                </div>
            </nav>
            <img className="object-cover w-full" src="banner.jpg" alt="couverture Pokémon"/>
        </>
    )
}

export default Header;