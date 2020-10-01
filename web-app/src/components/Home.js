import React from 'react'

function Home(props) {
    return (
        <div>
            <h1>This is the home page</h1>

            <button onClick={props.cartFunc}>Add to basket</button>
        </div>
    )
}

export default Home;
