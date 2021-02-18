SELECT * FROM path_events 
WHERE event_date_time BETWEEN 
(SELECT now() - interval '2 Hours') 
AND
(SELECT now() + interval '2 Hours' + interval '15 minutes');