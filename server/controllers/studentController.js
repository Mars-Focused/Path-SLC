module.exports = {
  deleteStudent: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    await db.student_delete_by_id(id);
    return res.sendStatus(200);
  },

  getStudents: async (req, res) => {
    const db = req.app.get("db");
    const response = await db.student_get_all();
    return res.status(200).send(response);
  },

  getUnverifiedStudents: async (req, res) => {
    const db = req.app.get("db");
    const response = await db.student_get_unverified();
    return res.status(200).send(response);
  },

  getVerifiedEmails: async (req, res) => {
    const db = req.app.get("db");
    const response = await db.student_get_verified_emails();
    return res.status(200).send(response);
  },

  newStudent: async (req, res) => {
    const db = req.app.get("db");
    const { email, sceneName, legalName } = req.body;
    const response = await db.student_insert_info(email, sceneName, legalName);
    return res.status(200).send(response);
  },
};
