import React from 'react'

function Nominations({nomsList, removeMovie}) {


    const nominations = nomsList.map(nom => 
        <li>{nom.title} {nom.year}
        <button onClick={() => removeMovie(nom.title)}>remove</button>
        </li> )
    return (
        <div className="nominations-container">
            <h3>Nominations</h3>
            <ul>{nominations}</ul>
        </div>
    )
}

export default Nominations
