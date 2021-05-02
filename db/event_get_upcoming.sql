-- INSERT INTO path_events
-- (event_date_time, event_title, event_description, event_location)
-- values
-- ((NOW() + INTERVAL '5 Hours' + INTERVAL '14 minutes'), 'Test', 'Test', 'Test');


set timezone TO 'MST';

DELETE FROM path_events
WHERE event_date_time < now();

SELECT * FROM path_events
WHERE event_date_time BETWEEN 
(SELECT now() + interval '5 Hours')
AND
(SELECT now() + interval '5 Hours' + interval '15 minutes' + interval '59.5 second');



-- DELETE FROM path_events
-- WHERE event_title = 'TEST'