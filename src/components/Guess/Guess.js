import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {
        range(5).map((step) => (
            <span key={step} className="cell"> {guess ? guess[step] : undefined}</span>
          )
        )

      }
    </p>
  );
}

export default Guess;
