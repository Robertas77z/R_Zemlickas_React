import axios from "axios";
import { Book } from "../BooksData/Book"
import { useState, useEffect} from "react";

export const BooksData=()=>{

 const[booksList, setBooksList]= useState([]);


 useEffect(() => {
    axios
      .get(`https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books`)
      .then((response) => {
        setBooksList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

    // const handleDelete = (id) => {
    //     const updatedList = donorsList.filter((donor) => donor.id !== id);
    //     setDonorsList(updatedList);
    // };



    return(<>
<div className="Books-container">
    {booksList.map((books) =>(
        <Book 
         key={books.id}
         id={books.id}
         cover={books.cover} 
         title={books.title} 
         author={books.author} 
         price={books.price} 
         reserved={books.reserved} 
         />
         
    ))} 
</div>
    </>
    );
};