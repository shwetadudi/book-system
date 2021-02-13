import './Search.css'
const Search = (props) => {
    return (
        <section className="search">  
            <label>Search</label>
            <input type="text" onChange={(e) => {props.search(e.target.value)}}/>
            
        </section>
    );
}
export default Search;