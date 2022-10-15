import { createContext, useState, useContext, useEffect } from "react";

const MainContext = createContext();
export default MainContext;

export function MainProvider({ children }) {
  // state to handle value from input
  const [bookmark, setBookmark] = useState(JSON.parse(localStorage.getItem("bookmark")) || []);

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }, [bookmark])
  
  

  return (
    <MainContext.Provider value={{ bookmark, setBookmark }}>
      {children}
    </MainContext.Provider>
  );
}

export const useBookmark = () => useContext(MainContext);