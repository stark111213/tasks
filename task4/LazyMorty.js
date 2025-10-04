import BaseMorty from "./BaseMorty.js";

class LazyMorty extends BaseMorty {

  playRound(boxes, getRickNumber) {
    console.log(`Morty: I'm lazy, Rick. No fancy hashes, guess`);

    const guess = getRickNumber();
    const gunBox = this.randgen(boxes);

    let otherBox;

    if (guess === gunBox) {
      for (let i = 0; i < boxes; i++) {
        if (i !== guess) {
          otherBox = i;
          break;
        }
      }
    } else otherBox = gunBox;

    let removedMsg = [];

    for (let i = 0; i < boxes; i++) {
      if (i !== guess && i !== otherBox) removedMsg.push(i);
    }
    
    console.log(`Morty: I removed boxes: ${removedMsg.join(", ") || "(none)"}`);
    console.log(`Morty: Only ${guess} and ${otherBox} remain.`);

    console.log(`Morty: Wanna switch to ${otherBox} or stick with ${guess}?`);
    const finalGuess = getRickNumber();

    return {
      guess: finalGuess,
      gunBox,
      switched: finalGuess !== guess,
      win: finalGuess === gunBox
    };
  }
}

export default LazyMorty;
