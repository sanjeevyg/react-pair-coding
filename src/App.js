import React, { Component } from 'react';
import Characters from './components/Characters'
import AliveCharacters from './components/AliveCharacters'
import './App.css';

class App extends Component{
  state = {
    characters:[], 
    alive:[],
    deceased:[]
  }

  componentDidMount() {
    fetch("https://breakingbadapi.com/api/characters")
      .then(response => response.json())
      .then(characters => this.setState({characters}))
  }
  
  addToAlive = (character) => {
    if(!this.state.alive.find(aliveCharacter => aliveCharacter === character)) {
        // this.setState({alive: [...this.state.alive, character]})
        const updatedCharacters = this.state.characters.filter(charac => charac !== character)
        this.setState({characters: updatedCharacters, alive: [...this.state.alive, character]})
    }
  }

  render() {
    return (
    <div className="App">
      <h1>Breaking Bad</h1>
      <section className="all-characters">
        <h1>Characters</h1>
        <div>
          <Characters 
            characters={this.state.characters}
            addToAlive={this.addToAlive}
          />
        </div>
      </section>
      <section className="alive">
        <h1>Alive</h1>
        <div>
          <AliveCharacters
            aliveCharacs={this.state.alive}
          />
        </div>
      </section>
    </div>)
  }
}

export default App;


