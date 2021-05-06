import React from 'react'

function Results({searchTerm, movieList, nominateMovie}) {
    const listItems = movieList.map((instance) =>
        <li>{instance.title} {instance.year} 
        <button onClick={() => nominateMovie(instance.title, instance.year)}>nominate me!</button></li>
    )

    
    return (
        <div>
            Results for "{searchTerm}"
            <ul>{listItems}</ul>
        </div>
    )
}

export default Results
