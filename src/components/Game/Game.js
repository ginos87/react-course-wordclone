import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import SadBanner from "../SadBanner";
import HappyBanner from "../HappyBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {

  const [gameState, setGameState] = React.useState('running');
  const [guesses, setGuesses] = React.useState([])

  if(guesses.length >= NUM_OF_GUESSES_ALLOWED && gameState !== 'won'){
    setGameState('lost');
    console.log('lost');
  }

  const addGuess = (guessInput) => {
    let nextGuesses = [...guesses];
    nextGuesses.push(guessInput);
    setGuesses(nextGuesses);

    if(guessInput === answer) {
      setGameState('won');
    }
  }


  return (
    <>
      {
        gameState==='lost' &&
        <SadBanner correctAnswer={answer}/>
      }
      {
        gameState==='won' &&
        <HappyBanner numberOfGuesses={guesses.length}/>
      }
      <GuessList guesses={guesses} answer={answer}/>
      <GuessInput addGuess={addGuess} gamesState={gameState}/>
    </>
);

}

export default Game;
