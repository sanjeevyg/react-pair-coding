import React from 'react';


function Card(props) {
   

//    const { img } = character 
//    const { name } = props.character 

   const handleOnClickAlive = () => {
       props.addToAlive(props.character)
   }

    return (
        <div className="card">
            <h1>   
                {props.character.name}
            </h1>
            <button onClick={handleOnClickAlive}>Alive</button>
            <button>Deceased</button>
        </div>
    )
}

export default Card

