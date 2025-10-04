import crypto from "crypto";

class KeyGen {
  constructor() {
    this.key =  crypto.randomBytes(64).toString('hex').toUpperCase();
  }
}

export default KeyGen;
