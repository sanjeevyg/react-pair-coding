import React from 'react';


function AliveCard({aliveCharac}) {
    console.log(aliveCharac)
   const { name } = aliveCharac

    return (
        <div className="alive-card">
            <h1> { name } </h1>
        </div>
    )
}

export default AliveCard 