import crypto from "crypto";

class HMACGen {
  constructor(secretKey, message) {

    this.hmac = crypto.createHmac('sha3-256', secretKey);
    this.hmac.update(message.toString());
    
    this.signature = this.hmac.digest('hex').toUpperCase();
  }
}

export default HMACGen;
