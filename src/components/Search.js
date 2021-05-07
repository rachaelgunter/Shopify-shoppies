import React from 'react'


function Search({searchTerm, setSearchTerm, omdbSearch}) {


    function handleSearch(e) {
        e.preventDefault()
        console.log('searching....')
        omdbSearch()
    } 

    return (
        <div>
            
            <form onSubmit={handleSearch}>
                <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search
