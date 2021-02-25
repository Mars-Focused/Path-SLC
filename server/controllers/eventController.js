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
    const db = req.app.get("db");
    const {
      eventId,
      eventDateTime,
      eventTitle,
      eventDescription,
      eventLocation,
    } = req.body;
    const response = await db.event_edit(
      eventId,
      eventDateTime,
      eventTitle,
      eventDescription,
      eventLocation
    );
    return res.status(200).send(response);
  },
  getEvents: async (req, res) => {
    const db = req.app.get("db");
    const response = await db.events_get();
    return res.status(200).send(response);
  },

  getOneEvent: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    const response = await db.event_get_one_by_id(id);
    return res.status(200).send(response);
  },

  getUpcomingEvent: async (req, res) => {
    const db = req.app.get("db");
    const response = await db.event_get_upcoming();
    return res.status(200).send(response);
  },

  addTestEvent: async (req, res) => {
    const db = req.app.get("db");
    const response = await db.event_TEST();
    return res.status(200).send(response);
  },
};
