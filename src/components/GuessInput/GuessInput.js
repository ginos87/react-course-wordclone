import React from "react";

function GuessInput({addGuess}) {

  const [guess, setGuess] = React.useState('')

  function handeSubmit(event) {
    event.preventDefault();
    addGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handeSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        onChange={(event) => (setGuess(event.target.value.toUpperCase()))}/>
    </form>
  );
}

export default GuessInput;
