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
        kid: "0kjcQoKARRVTpBmZkk7ArVEP4r03pPupLnk0b_qC5ZI",
        n: "tNIoFMZtddMxF8o9-s9gp945H7dMEaQcHNbIFdbLXpA9oE_-CNEjqmI77KgsyIkX9FZBnats9PwsMh6KdA7URxTvA6BlQTsfw-wCwv5kWld3S0whgKILPRVmjzJbuqpTRWPjKRgMrGvh9f54OnueSm5Z9xHm_ZIfzvnl8wP3BaF2vdpgg4sZT2yrwAX-pEDlyYT1G6sC2IFlyDT0egkoOLH38-cgm0swSa7T4XkmQf9Gjs7o7w-kjBCK5upfLnEamkwazI6FlWyGHktS6sqtVloUo6vs7X_E6Z5_MW-2v6ShIh5W60T3MhvmMxlrRA8yW23R995tsD6oGFSnhJLsDw",
        e: "AQAB"
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
