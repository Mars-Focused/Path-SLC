UPDATE path_events
SET
event_date_time = $2,
event_title = $3,
event_description = $4,
event_location = $5
WHERE event_id = $1
returning *