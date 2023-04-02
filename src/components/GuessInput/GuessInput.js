import React from "react";

function GuessInput({addGuess}) {

  const [guessInput, setGuessInput] = React.useState('')

  function handeSubmit(event) {
    event.preventDefault();
    addGuess(guessInput);
    setGuessInput('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handeSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guessInput}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        onChange={(event) => (setGuessInput(event.target.value.toUpperCase()))}/>
    </form>
  );
}

export default GuessInput;
