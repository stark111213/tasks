class MortyLines {

  welcome = () => console.log('\nWELCOME!\n');

  initial(hmac, hmacNumber, boxes, guess, getRickNumber) {
    console.log(`Morty: Oh geez, Rick, I'm gonna hide your portal gun in one of the ${boxes} boxes, okay?`);
    console.log(`Morty: HMAC${hmacNumber}=${hmac}`);
    
    console.log(`Morty: Rick, enter your number [0, ${boxes}) so you don't whine later that I cheated, alright?`);
    const value1 = getRickNumber();

    console.log(`Morty: Okay, okay, I hid the gun. What's your guess [0, ${boxes})?`);
    guess = getRickNumber();

    return [guess, value1];
  }

  reveal(keyNumber, key, value, random, boxes, fairNumber) {
    console.log(`Morty: Aww man, my ${keyNumber} random value is ${random}.`);
    console.log(`Morty: KEY${keyNumber}=${key}`);

    console.log(`Morty: So the ${keyNumber} fair number is (${value} + ${random}) % ${boxes} = ${fairNumber}.`);
  }

  showGun(gunBox) {
    console.log(`Morty: Your portal gun is in the box ${gunBox}.`);
  }

  winState(guess, fairNumber, wins, losses) {
    if (guess === fairNumber) {
        console.log('Morty: U win Rick!');
        wins++;
    }
    else {
      losses++;
      console.log(`Morty: Aww man, you lost, Rick. Now we gotta go on one of *my* adventures!`);
    }

    return [wins, losses];
  }
}

export default MortyLines;
