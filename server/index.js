require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const authCtrl = require("./controllers/authController");
const eventCtrl = require("./controllers/eventController");
const studentCtrl = require("./controllers/studentController");
const Leila = require("./leila/leila");
const auth = require("./middleware/authMiddleware");
const emailSlave = require("./emailSlave/emailSlave");

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
  // Leila.Fox(PORT, "Mars", 14, 6, 5, 5, false); //<-- Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
  })
);

emailSlave.send();

//Login-Logout
app.post("/auth/login", authCtrl.login);
app.get("/auth/logout", authCtrl.logout);

//Events
app.post("/api/addEvent", auth.usersOnly, eventCtrl.addEvent);
app.put("/api/editEvent/:id", auth.usersOnly, eventCtrl.editEvent);
app.get("/api/getOneEvent/:id", eventCtrl.getOneEvent);
app.get("/api/getTodaysEvent", eventCtrl.getUpcomingEvent);
app.post("/api/addTestEvent", eventCtrl.addTestEvent);
app.get("/api/getEvents", eventCtrl.getEvents);

//Students
app.delete("/api/deleteStudent/:id", auth.usersOnly, studentCtrl.deleteStudent);
app.get("/api/getStudents", auth.usersOnly, studentCtrl.getStudents);
app.get(
  "/api/getUnverifiedStudents",
  auth.usersOnly,
  studentCtrl.getUnverifiedStudents
);
app.get("/api/getStudentEmails", auth.usersOnly, studentCtrl.getVerifiedEmails);
app.post("/api/newStudent", auth.usersOnly, studentCtrl.newStudent);
app.put("/api/verifyStudent/:id", auth.usersOnly, studentCtrl.verifyStudent);
app.put("/api/editStudent/:id", auth.usersOnly, studentCtrl.editStudent);

//Blog

//Announcements

app.listen(PORT, () => console.log(`...LOADING...`));
