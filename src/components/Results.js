import React from 'react'

function Results({searchTerm, movieList, nominateMovie, nomsList}) {

    function isNommed(title) {
        const nomArr = nomsList.filter(nom => nom.title === title)
        if (nomArr[0]){
            console.log('found nomination')
          return true
        } else return false
    }


    const listItems = movieList.map((instance) =>
        <li>{instance.title} {instance.year} 
        {isNommed(instance.title) ? null : <button onClick={() => nominateMovie(instance.title, instance.year)}>nominate me!</button>}</li>
    )

  
    
    return (
        <div className="results-container">
            <h3>Showing results for: {searchTerm}</h3>
            <ul>{listItems}</ul>
        </div>
    )
}

export default Results
