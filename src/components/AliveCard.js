import React from 'react';


function AliveCard({aliveCharac, addToCard}) {
    console.log(aliveCharac)
   const { name } = aliveCharac

   const handleOnClick = () => {
       addToCard(aliveCharac)
   }

    return (
        <div className="alive-card">
            <h1> { name } </h1>
            <button onClick={handleOnClick}>Add To Cardlist</button>
        </div>
    )
}

export default AliveCard 