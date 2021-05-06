import React from 'react'


function Search({searchTerm, setSearchTerm}) {


    function handleSearch(event){
        setSearchTerm(event.target.value)
    }
    console.log(searchTerm)
    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearch}></input>
        </div>
    )
}

export default Search
