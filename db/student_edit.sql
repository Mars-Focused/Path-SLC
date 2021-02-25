UPDATE path_ml
SET
student_email = $2,
scene_name = $3,
legal_name = $4
WHERE student_id = $1
returning *