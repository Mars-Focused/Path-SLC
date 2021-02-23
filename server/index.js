require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const authCtrl = require("./controllers/authController");
const Leila = require("./leila/leila");

const PORT = 6000;

const { SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log(`Database Connected on port ${PORT}`);
  Leila.Fox(PORT, "Mars", 14, 6, 5); //<-- Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
  })
);

app.post("/auth/login", authCtrl.login);
app.get("/auth/logout", authCtrl.logout);

app.listen(PORT, () => console.log(`...LOADING...`));
