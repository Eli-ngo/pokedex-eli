import './App.css';
import { Outlet } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
      <>
        <Header />
        <img className="object-cover w-full" src="banner.jpg" alt="couverture Pokémon"/>
        <Outlet />
      </>
  );
}

export default App;
