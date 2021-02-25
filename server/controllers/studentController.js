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
};
