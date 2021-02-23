module.exports = {
  addEvent: async (req, res) => {
    const {
      eventDateTime,
      eventTitle,
      eventDescription,
      eventLocation,
    } = req.body;
    const db = req.app.get("db");
    const response = await db.event_add(
      eventDateTime,
      eventTitle,
      eventDescription,
      eventLocation
    );
    return res.status(200).send(response);
  },

  editEvent: async (req, res) => {
    const {
      eventId,
      eventDateTime,
      eventTitle,
      eventDescription,
      eventLocation,
    } = req.body;
    const db = req.app.get("db");
    const response = await db.event_edit(
      eventId,
      eventDateTime,
      eventTitle,
      eventDescription,
      eventLocation
    );
    return res.status(200).send(response);
  },
  getEvents: async (res) => {
    const db = req.app.get("db");
    const response = await db.events_get();
    return res.status(200).send(response);
  },
};
