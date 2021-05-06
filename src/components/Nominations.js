import React from 'react'

function Nominations({nomsList}) {


    const nominations = nomsList.map(nom => 
        <li>{nom.title} {nom.year}</li> )
    return (
        <div>
            <ul>{nominations}</ul>
        </div>
    )
}

export default Nominations
