import crypto from "crypto";

class RandomNumberGen {
  constructor(max) {
    this.rand = crypto.randomInt(0, max);
  }
}

export default RandomNumberGen;
