import Input from "./Input.js";
import readline from "readline-sync";
import MortyLines from "./MortyLines.js";
import DisplayStats from "./DisplayStats.js"
import LazyMorty from "./LazyMorty.js";
import ClassicMorty from "./ClassicMorty.js";

class Game {

  constructor() { 

    this.input = new Input(process.argv.slice(2));

    switch (this.input.className) {
      case "ClassicMorty":
        this.morty = new ClassicMorty();
        break;
      case "LazyMorty":
        this.morty = new LazyMorty();
        break;
      default:
        break;
    }

    this.mortyLines = new MortyLines();
    this.displayStats = new DisplayStats();
  }

  get boxes() {
    return this.input.boxes;
  }

  getRickNumber = () =>  Number(readline.question('Rick: '));

  getRickChoice = () => readline.question('Rick: ')
                                .trim()
                                .toLowerCase();

  allgenHelper = (boxes) => this.morty.allgen(boxes);

  getFairNumber = (a, b, n) => (a + b) % n;

  main() {
    const { boxes, 
            allgenHelper, 
            getRickNumber, 
            getFairNumber, 
            getRickChoice, 
            mortyLines,
            displayStats,
            morty } = this;
    
    let wins = 0;
    let losses = 0;
    let round = 1;

    let roundsSwitched = 0, roundsStayed = 0;
    let winsSwitched = 0, winsStayed = 0;

    mortyLines.welcome();

    for (;;) {

      const { guess, gunBox, switched, win } = morty.playRound(
        boxes, getRickNumber, mortyLines, getFairNumber, allgenHelper
      );

      mortyLines.showGun(gunBox);

      [wins, losses] = mortyLines.winState(guess, gunBox, wins, losses);

      if (switched) {
        roundsSwitched++;
        if (win) winsSwitched++;
      } else {
        roundsStayed++;
        if (win) winsStayed++;
      }

      console.log("Morty: Play again? (y/n)");

      if (getRickChoice() !== "y") {
        console.log('Morty: Okay… uh, bye!');
        break;
      }
      
      console.log(`\n========= Round ${++round} =============`);
    }

    displayStats.display(roundsSwitched, roundsStayed, winsSwitched, winsStayed, boxes);
  }
}

const game = new Game();
game.main();
