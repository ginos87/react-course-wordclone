import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {

  const checkedGuess = checkGuess(guess, answer);
  console.log(checkedGuess);

  return (
    <p className="guess">
      {
        range(5).map((step) => {
          let classes = ['cell'];

          if(guess){
            classes.push(checkedGuess[step].status);
          }

          const charValue = guess ? checkedGuess[step].letter : undefined;

          return <span key={step} className={classes.join(' ')}> {charValue}</span>;
          }
        )
      }
    </p>
  );
}

export default Guess;
