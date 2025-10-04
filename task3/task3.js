const express = require("express");
const { gcd } = require("bigint-crypto-utils");

const app = express();

app.get('/app/azimjonerkinov01_gmail_com', (req, res) => {

  const xs = req.query.x;
  const ys = req.query.y;

  if (!isValidIntegerString(xs) || !isValidIntegerString(ys)) res.send("NaN");

  let x = BigInt(xs);
  let y = BigInt(ys);

  if (x < 1n || y < 1n) res.send("NaN");

  res.send(lcm(x, y).toString());
});


app.listen(3000);

const lcm = (a, b) => (a / gcd(a, b)) * b;

const isValidIntegerString = (str) => /^-?\d+$/.test(str);
