require("dotenv").config();
import axios from "axios";
const nodemailer = require("nodemailer");
//Left off at 7:50

const { GMAIL_LOGIN, PASSWORD } = process.env;

function checkEvent() {
  axios.get("/api/getTodaysEvent");
}

module.exports = {
  send: () => {
    //From  https://www.youtube.com/watch?v=nRwbp2QVj5Y&list=PL3EVN6lZrgEWOW-BD-SeQCOHo-eb3LeHf&index=23
    //email message options
    const mailOptions = {
      from: "marshallaclarke@gmail.com",
      to: "bluelynx@live.com",
      subject: "Email from Path-slc EmailSlave",
      text: "Leila says Hi!",
    };

    // email transport configuration
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: `${GMAIL_LOGIN}`,
        pass: `${PASSWORD}`, //<-if this is filled in and on github! you have made a mistake!!!
      },
    });

    // Send Email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("email Sent: " + info.response);
      }
    });
  },
};
