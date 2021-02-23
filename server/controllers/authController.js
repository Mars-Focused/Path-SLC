const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    //I removed brackets around the word username because I did not understand why they were there.
    const foundUser = await db.admin_login([username]);
    const user = foundUser[0];
    console.log("user:", user);
    if (!user) {
      return res
        .status(401)
        .send(
          "User not found. Please register as a new user before logging in."
        );
    }
    const isAuthenticated = bcrypt.compareSync(password, user.hash);
    if (!isAuthenticated) {
      return res.status(403).send("Incorrect password");
    }
    // Login user Successful creating req.session.user
    req.session.user = {
      id: user.user_id,
      username: user.username,
    };
    // console.log(req.session.user.id);
    return res.status(200).send(req.session.user); // <- sending req.session.user to the front end (Login.js line: 40)
  },

  logout: async (req, res) => {
    req.session.destroy();
    return res.sendStatus(200);
  },
};
