DROP TABLE IF EXISTS path_ml;
DROP TABLE IF EXISTS path_events;
DROP TABLE IF EXISTS path_blog;
DROP TABLE IF EXISTS path_announcements;
DROP TABLE IF EXISTS path_admin;

CREATE TABLE path_ml(
  student_id SERIAL PRIMARY KEY,
  email VARCHAR(200) UNIQUE NOT NULL,
  scene_name VARCHAR(100) NOT NULL,
  legal_name VARCHAR(100) NOT NULL,
  verification BOOLEAN NOT NULL,
  hash VARCHAR(500) NOT NULL
);

CREATE TABLE path_events(
  event_id SERIAL PRIMARY KEY,
  event_date_time timestamp,
  event_title VARCHAR(100) NOT NULL,
  event_description VARCHAR(1000) NOT NULL,
  event_location VARCHAR(200) NOT NULL
);

CREATE TABLE path_blog(
  blog_id SERIAL PRIMARY KEY,
  blog_date_time timestamp,
  blog_title VARCHAR(100) NOT NULL,
  blog_content VARCHAR(2000) NOT NULL
);

CREATE TABLE path_announcements(
  anno_id SERIAL PRIMARY KEY,
  anno_date_time timestamp,
  anno_title VARCHAR(100) NOT NULL,
  anno_content VARCHAR(2000) NOT NULL
);

CREATE TABLE path_admin(
  admin_id SERIAL PRIMARY KEY,
  admin_username VARCHAR(100) NOT NULL,
  hash VARCHAR(500) NOT NULL
);

INSERT INTO path_events
(event_date_time, event_title, event_description, event_location)
VALUES 
('14 Apr 2021 4:20am', 'Mars Birthday', 'we will be celebrating the birthday of the man who made this website', 'Contact mars for event location');