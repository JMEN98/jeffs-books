import React, { useEffect, useState } from "react";
import "../App.css"
import { API_URL } from "../API";
import axios from 'axios'
import { useAppContext } from "./appContext";
import { useNavigate } from "react-router-dom";

const BookList =()=>{
 
  const [books,setBooks]=useState([])

  const {favorites,addtoFavorites,removeFromFavorites}=useAppContext();

const navigte = useNavigate()

 const favoritesChecker = (id)=>{
  const boolean = favorites.some((book)=>book.id===id)
  return boolean

 }

      
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  

  return(
    <div className="Booklist" > 
    {books.map((book) => (
  <div key={book.id} className='book' >
    <h4>{book.title}</h4>
    <img src={book.image_url} onClick={()=>navigte(`/book/${book.id}`)} ></img>
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


export default BookList