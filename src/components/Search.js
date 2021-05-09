import React from 'react'
import searchpic from '../searchpic.png';

function Search({searchTerm, setSearchTerm, omdbSearch}) {


    function handleSearch(e) {
        e.preventDefault()
        omdbSearch()
    } 

    return (
        <div className="search-container">
            <img className="search-pic" src={searchpic} alt="search movies"/>
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search
