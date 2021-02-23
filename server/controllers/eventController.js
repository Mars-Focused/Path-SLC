module.exports = {
  addEvent: async (req, res) => {
    const {
      event_date_time,
      event_title,
      event_description,
      event_location,
    } = req.body;
    const db = req.app.get("db");
    const response = await db.event_add(
      event_date_time,
      event_title,
      event_description,
      event_location
    );
    return res.status(200).send(response);
  },
};
