import BaseMorty from "./BaseMorty.js";

class ClassicMorty extends BaseMorty {

  playRound(boxes, getRickNumber, mortyLines, getFairNumber, allgenHelper) {
    let guess, value1;

    const [key1, random1, hmac1] = allgenHelper(boxes);
    [guess, value1] = mortyLines.initial(hmac1, 1, boxes, guess, getRickNumber);

    const [key2, random2, hmac2] = allgenHelper(boxes);
    const [finalGuess, value2, switched] = this.keepBox(
      hmac2, 2, guess, getRickNumber, boxes
    );

    const fairNumber1 = getFairNumber(value1, random1, boxes);
    mortyLines.reveal(1, key1, value1, random1, boxes, fairNumber1);

    const fairNumber2 = getFairNumber(value2, random2, boxes - 1);
    mortyLines.reveal(2, key2, value2, random2, boxes - 1, fairNumber2);

    const win = (finalGuess === fairNumber1);

    return {
      guess: finalGuess,
      gunBox: fairNumber1,
      switched,
      win
    };
  }

  keepBox(hmac, hmacNumber, guess, getRickNumber, boxes) {
    console.log(`Morty: Let's, uh, generate another value now, I mean, to select a box to keep in the game.`);
    console.log(`Morty: HMAC${hmacNumber}=${hmac}`);

    console.log(`Morty: Rick, enter your number [0, ${boxes - 1}), and, uh, don't say I didn't play fair, okay?`);
    const value2 = getRickNumber();

    console.log(`Morty: I'm keeping the box you chose, I mean ${guess}, and the box ${value2}.`);
    console.log(`Morty: You can switch your box (enter ${value2}), or, you know, stick with it (enter ${guess}).`);
    
    const finalGuess = getRickNumber();
    const switched = (finalGuess !== guess);

    return [finalGuess, value2, switched];
  }
}

export default ClassicMorty;
