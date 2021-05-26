import React from 'react'

export const GifExpertApp = () => {

    const categories = ['One puch', 'Samurai', 'Dragon Ball']
    return (
        <div>
            <h2>Gif Expert App</h2>
            <hr />

            <ol>
            { categories.map( c => (
                <li>{c}</li>
            )) }

            </ol>
        </div>
    )
}


export default GifExpertApp;
