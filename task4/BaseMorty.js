import HMACGen from "./HMACGen.js";
import KeyGen from "./KeyGen.js";
import RandomNumberGen from "./RandomNumberGen.js";

class BaseMorty {

  keygen = () => new KeyGen().key;

  randgen = (boxes) => new RandomNumberGen(boxes).rand;
  
  hmacgen = (key, rand) => new HMACGen(key, rand).signature;

  allgen(boxes) {
    const key = this.keygen();
    const rand = this.randgen(boxes);
    const hmac = this.hmacgen(key, rand);

    return [key, rand, hmac];
  }
}

export default BaseMorty;
