import "./SubNavbar.css"

export default function SubNavbar(props){

    //Function to set the certain category that was clicked on.
    function setCat(e){
        e.preventDefault();
        props.setCategory(e.target.innerText);
    }
    return(
        <div className="input-wrapper">
        <form className="input" onChange={e => props.setInput(e.target.value)}>
            <input type="search" placeholder="Search" className="input-form"></input>
            <div className="input-titles">
                <button className="input-btn" onClick={e => setCat(e)}>All Categories</button>
                <button className="input-btn" onClick={e => setCat(e)}>Clothing</button>
                <button className="input-btn" onClick={e => setCat(e)}>Food</button>
                <button className="input-btn" onClick={e => setCat(e)}>Accessories</button>
                <button className="input-btn" onClick={e => setCat(e)}>Tech</button>
            </div>
        </form>
        </div>
    )
}