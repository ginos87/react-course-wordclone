import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessList({guesses, answer}) {
  return (
    <div className="guess-results">
      {
        range(NUM_OF_GUESSES_ALLOWED).map((step) => (
          <Guess key={step} guess={guesses[step]} answer={answer}/>
        ))
      }
    </div>
  );
}

export default GuessList;
