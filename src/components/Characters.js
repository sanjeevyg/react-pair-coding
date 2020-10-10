import React from 'react';
import Card from './Card';

function Character(props) {
   
    const displayCharacters = () => {
        return props.characters.map(character => {
        return <Card key={character.char_id} character={character} addToAlive={props.addToAlive}/>
    })}

    return (
        <div className="characters">{displayCharacters()}</div>
    )
}

export default Character