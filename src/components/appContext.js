import { createContext, useContext, useState} from "react";

const AppContext = createContext(null);


export const useAppContext=()=>{
const context =useContext( AppContext)

if (context===undefined){
  throw new Error(" Appcontext muust be within appContextProvider !")
}
return context;

}

const AppContextProvider =({ children})=>{
  const [favorites,setFavorites]=useState([])


  const addtoFavorites=(book)=>{
    const oldFavorites = [...favorites];

     const newFavorites = oldFavorites.concat(book)

     setFavorites(newFavorites);
  }

  const removeFromFavorites=(id)=>{
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((book)=>book.id!==id)

    setFavorites(newFavorites)

  }

return(
  <AppContext.Provider value={{favorites,addtoFavorites,removeFromFavorites}}>
    {children}
  </AppContext.Provider>
)

}

export default AppContextProvider; 

