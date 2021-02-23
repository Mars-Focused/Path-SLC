require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const authCtrl = require("./controllers/authController");
const eventCtrl = require("./controllers/eventController");
const Leila = require("./leila/leila");
const auth = require("./middleware/authMiddleware");

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
  Leila.Fox(PORT, "Mars", 10, 5, 2); //<-- Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
  })
);

//Login-Logout
app.post("/auth/login", authCtrl.login);
app.get("/auth/logout", authCtrl.logout);

//Events
app.post("/api/addEvent", auth.usersOnly, eventCtrl.addEvent);
app.put("/api/editEvent", auth.usersOnly, eventCtrl.editEvent);
app.get("/api/getEvents", eventCtrl.getEvents);

//Students

//Blog

//Announcements

app.listen(PORT, () => console.log(`...LOADING...`));
