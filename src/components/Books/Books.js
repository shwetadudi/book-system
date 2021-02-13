import BookForm from './BookForm/BookForm';
import Search from './Search/Search';
import './Books.css';


import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const Books = () => {
    const booksData = useSelector(state => {
        return state;
    });
const  [books, setBooks] = useState(booksData);
const  [editBook, seteditBook] = useState('');
const dispatch = useDispatch();
const searchBook = (text) => {
    setBooks(booksData.filter(book => book.name.includes(text)));
}


useEffect(() => {
    setBooks(booksData); 
},[booksData]);
const deleteBook = (book) => {
    dispatch({type : "DELETE_BOOK", payload : book}); 
}

const bookData = books.length ? books.map( item => {return <div className="book" key={item.id}>
        <div className="text">
        <p><b>Name :</b> {item.name}</p>
        <p><b>Description :</b> {item.desc}</p>
        <p><b>Author : </b>{item.author}</p>
        </div><br/>
        <div className="Buttons"><button className="edit-btn" onClick={() => seteditBook(item)}>Edit</button><button className="delete-btn" onClick={() => deleteBook(item)}>Delete</button></div></div>}) : 'No Books!';   
    return(<>
    <Search search={searchBook}/>
    <BookForm book={editBook} clearbook={seteditBook}/>
    <div className="books">{bookData}</div>
    </>
         
        
    )

}
export default Books;