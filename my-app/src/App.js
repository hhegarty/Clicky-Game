// Call on react and other files needed //

import React, { Component } from 'react';

import characters from './characters.json';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import CardList from './components/CardList';

class App extends Component {
  state = {
    characters,
    clickedCharacter: [],
    score: 0,
    highScore: 0,
    isGuessed: false
  };

  randomGenerator = (a, b) => (Math.random() > 0.5 ? -1 : 1);

  imageClick = id => {
    const currentCharacter = id;
    const CharacterAlreadyClicked =
      this.state.clickedCharacter.indexOf(currentCharacter) > -1;

    if (CharacterAlreadyClicked) {
      this.setState({
        characters: this.state.characters.sort(this.randomGenerator),
        clickedCharacter: [],
        score: 0,
        highScore: 0,
        isGuessed: false
      });

// Set an alert if character has already been clicked // 

      alert('You lose. Play again?');
    } else {
      let score = this.state.score;
      let characters = this.state.characters;

      this.setState(
        {
          characters: this.state.characters.sort(this.randomGenerator),
          clickedCharacter: this.state.clickedCharacter.concat(currentCharacter),
          score: score + 1,
          highScore: Math.max(this.state.highScore, score),
          isGuessed: true
        },
        () => {
          if (this.state.score === characters.length) {
            alert('Yay! You Win!');
            this.setState({
              characters: this.state.characters.sort(this.randomGenerator),
              clickedCharacter: [],
              score: 0,
              highScore: 0
            });
          }
        }
      );
    }
  };

  render() {
    const { characters, score, highScore, isGuessed } = this.state;

    return (
      <div className='application'>
        <Header score={score} highScore={highScore} isGuessed={isGuessed} />
        <div className='wrapper'>
          <CardList characters={characters} imageClick={this.imageClick} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;