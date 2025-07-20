const cors = require("cors");

const corsmiddleware = cors({
  origin: [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "https://www.cardsproject.co.il",
    "https://full-stack-z4c4.onrender.com"
  ], methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', `x-auth-token`],
  credentials: true,
});

module.exports = corsmiddleware;
