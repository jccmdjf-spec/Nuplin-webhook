const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Nuplin Webhook running OK");
});

app.post("/activation", (req, res) => {
  console.log("Activation received:", req.body);

  res.status(200).json({
    ok: true,
    received: true
  });
});

app.get("/jwks/qa.json", (req, res) => {
  res.json({
    keys: [
      {
        kty: "RSA",
        use: "sig",
        alg: "RS256",
        kid: "ultranet-key-2",
        n: "TU_MODULO_N",
        e: "AQAB"
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
