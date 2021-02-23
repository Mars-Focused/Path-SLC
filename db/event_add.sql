INSERT INTO path_events
(event_date_time, event_title, event_description, event_location)
VALUES
($1, $2, $3, $4)
returning *