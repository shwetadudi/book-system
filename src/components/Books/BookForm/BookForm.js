import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import './BookForm.css';

function AddBooks(props){
    const dispatch = useDispatch();
    const [name, setName] = useState(''); 
    const [desc, setDesc] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState(null);
    useEffect(() => {
        setName(props.book.name || '');
        setDesc(props.book.desc || '');
        setAuthor(props.book.author || '');
        setId(props.book.id || null);
    },[props]);
    const handleSubmit = (event) => {
        let bookid = id ? id : Math.random();
        event.preventDefault();
        dispatch({type : "ADD_BOOK", payload : {id:bookid, name : name, desc : desc, author : author}}); 
        props.clearbook('');
        setName('');
        setDesc('');
        setAuthor('');
        setId('');
    }
    return(
        <aside className="main"><h4>Add a new Book</h4><form onSubmit={handleSubmit}>
            <div><label>Book Name:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}></input><br/>
                    </div>
                    <div><label>Book Description: </label>
                    <input type="text" value={desc} onChange={e => setDesc(e.target.value)}></input><br/>
                   </div>
                    <div><label>Author Name:</label>
                    <input type="text" value={author} onChange={e => setAuthor(e.target.value)}></input><br/>
                 </div>            
                <button className="submit-btn">Submit</button>                    
                </form>
        </aside>
    )
}
export default AddBooks;