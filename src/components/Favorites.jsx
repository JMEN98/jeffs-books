import React from "react";
import "../App.css"
import { useAppContext } from "./appContext";
const Favorites =()=>{

  const {favorites,addtoFavorites,removeFromFavorites}=useAppContext();

 const favoritesChecker = (id)=>{
  const boolean = favorites.some((book)=>book.id===id)
  return boolean
 }
 return(
  <div className="favorites" > 
  {favorites.map((book) => (
<div key={book.id} className='book' >
  <h4>{book.title}</h4>
  <img src={book.image_url}></img>
  <h4>{book.authors}</h4>
  {favoritesChecker(book.id) ?
   <button onClick={()=>removeFromFavorites(book)} > remove Favorite</button>
  :  <button onClick={()=> addtoFavorites(book)} >Add Favorite</button>
}


</div>
))}
  </div>
)

}


export default Favorites