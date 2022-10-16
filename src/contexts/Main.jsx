import { createContext, useState, useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast"

const MainContext = createContext();
export default MainContext;

export function MainProvider({ children }) {
  
  const [bookmark, setBookmark] = useState(JSON.parse(localStorage.getItem("bookmark")) || []);

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }, [bookmark]) 

  return (
    <MainContext.Provider value={{ bookmark, setBookmark }}>
      <Toaster position="bottom-center" reverseOrder={false}/>
      {children}
    </MainContext.Provider>
  );
}

export const useBookmark = () => useContext(MainContext);