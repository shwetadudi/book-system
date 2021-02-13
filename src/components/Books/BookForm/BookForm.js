import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import './BookForm.css';

function AddBooks(props){
   // const {id, name, desc, author} = {...props.book};
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
        console.log(props.book);
    },[props,name,desc,author])
    const handleSubmit = (event) => {
        let bookid = id ? id : Math.random();
        event.preventDefault();
        dispatch({type : "ADD_BOOK", payload : {id:bookid, name : name, desc : desc, author : author}}); 
        //event.target.reset();
        //props.clearbook('');
        setName('');
        setDesc('');
        setAuthor('');
        setId('');
    }

    return(
        <aside className="main"><h4>Add a new Book</h4><form onSubmit={handleSubmit}>
            <div><label>Book Name:</label>
                    <input type="text" defaultValue={name} onChange={e => setName(e.target.value)}></input><br/>
                    </div>
                    <div><label>Book Description: </label>
                    <input type="text" defaultValue={desc} onChange={e => setDesc(e.target.value)}></input><br/>
                   </div>
                    <div><label>Author Name:</label>
                    <input type="text" defaultValue={author} onChange={e => setAuthor(e.target.value)}></input><br/>
                 </div>            
                <button className="submit-btn">Submit</button>                    
                </form>
        </aside>
    )
}
export default AddBooks;