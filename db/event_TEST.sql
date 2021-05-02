DELETE FROM path_events
WHERE event_title = 'TEST';

set timezone TO 'MST';

INSERT INTO path_events
(event_date_time, event_title, event_description, event_location)
VALUES 
(now() + interval '5 Hours' + interval '14 minutes','TEST', 'This event exists only to test the database and ensure it works', 'there is no location for this event')