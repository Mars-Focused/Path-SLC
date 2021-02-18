DROP TABLE IF EXISTS path_ml;
DROP TABLE IF EXISTS path_events;
DROP TABLE IF EXISTS path_blog;
DROP TABLE IF EXISTS path_announcements;
DROP TABLE IF EXISTS path_admin;

CREATE TABLE path_ml(
  student_id SERIAL PRIMARY KEY,
 student_email VARCHAR(200) UNIQUE NOT NULL,
  scene_name VARCHAR(100) NOT NULL,
  legal_name VARCHAR(100) NOT NULL,
  verification BOOLEAN NOT NULL
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
  blog_content VARCHAR(9000) NOT NULL
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
  admin_email VARCHAR(50) NOT NULL,
  hash VARCHAR(500) NOT NULL
);

INSERT INTO path_events
(event_date_time, event_title, event_description, event_location)
VALUES 
('14 Apr 2021 4:20am', 'Mars Birthday', 'we will be celebrating the birthday of the man who made this website', 'Contact mars for event location'),
('18 March 2021 7:00pm', 'Path Virtual Munch', 'First ACTUAL event to be posted on this site', 'Join our Mailing list to get the Location'),
('24 March 2021 7:00pm', 'Path Virtual Munch', 'Second event to be posted on this site', 'Join our Mailing list to get the Location');


INSERT INTO path_ml
(student_email, scene_name, legal_name, verification)
VALUES
('BlueLynx@live.com', 'Mars_A', 'Marshall Aaron Clarke', true),
('marsthecoder@outlook.com', 'Mars_A', 'Marshall Aaron Clarke', false),
('marshallaclarke@gmail.com', 'Mars_A', 'Marshall Aaron Clarke', false);

INSERT INTO path_blog
(blog_date_time, blog_title, blog_content)
VALUES
(CURRENT_TIMESTAMP, 'Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris a diam maecenas sed enim ut. Semper viverra nam libero justo laoreet. Purus viverra accumsan in nisl nisi. Lobortis elementum nibh tellus molestie nunc non. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Pulvinar pellentesque habitant morbi tristique senectus. Quam id leo in vitae turpis massa sed elementum tempus. Arcu non odio euismod lacinia at. Ornare aenean euismod elementum nisi quis eleifend quam. Bibendum neque egestas congue quisque egestas diam. Vitae tempus quam pellentesque nec nam. Vitae auctor eu augue ut lectus arcu bibendum at varius. Ac placerat vestibulum lectus mauris ultrices eros in. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Varius morbi enim nunc faucibus a pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies. At consectetur lorem donec massa sapien faucibus. Venenatis a condimentum vitae sapien pellentesque habitant. Eu turpis egestas pretium aenean pharetra magna. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nec dui nunc mattis enim ut. Porttitor eget dolor morbi non arcu risus. Porttitor lacus luctus accumsan tortor posuere ac ut. Ut porttitor leo a diam sollicitudin tempor id eu. Sem et tortor consequat id porta nibh venenatis. Vitae congue mauris rhoncus aenean. Leo urna molestie at elementum eu facilisis sed odio morbi. Ut diam quam nulla porttitor massa. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. A arcu cursus vitae congue mauris rhoncus. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Curabitur gravida arcu ac tortor dignissim convallis aenean. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Odio ut sem nulla pharetra diam sit amet nisl. Scelerisque purus semper eget duis at. Vitae sapien pellentesque habitant morbi tristique. Interdum velit euismod in pellentesque massa placerat duis ultricies. Sed egestas egestas fringilla phasellus faucibus. Sit amet consectetur adipiscing elit duis. Elit duis tristique sollicitudin nibh sit amet. Adipiscing tristique risus nec feugiat in fermentum posuere. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Eget dolor morbi non arcu risus. Eget aliquet nibh praesent tristique. Adipiscing commodo elit at imperdiet. Libero nunc consequat interdum varius sit amet mattis. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Vel pharetra vel turpis nunc. Neque sodales ut etiam sit amet nisl purus. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Penatibus et magnis dis parturient montes nascetur ridiculus. Ut placerat orci nulla pellentesque dignissim enim. Risus sed vulputate odio ut. Curabitur vitae nunc sed velit dignissim sodales. Pharetra convallis posuere morbi leo urna.'),
(CURRENT_TIMESTAMP, 'Lorem Ipdif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris a diam maecenas sed enim ut. Semper viverra nam libero justo laoreet. Purus viverra accumsan in nisl nisi. Lobortis elementum nibh tellus molestie nunc non. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Pulvinar pellentesque habitant morbi tristique senectus. Quam id leo in vitae turpis massa sed elementum tempus. Arcu non odio euismod lacinia at. Ornare aenean euismod elementum nisi quis eleifend quam. Bibendum neque egestas congue quisque egestas diam. Vitae tempus quam pellentesque nec nam. Vitae auctor eu augue ut lectus arcu bibendum at varius. Ac placerat vestibulum lectus mauris ultrices eros in. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Varius morbi enim nunc faucibus a pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies. At consectetur lorem donec massa sapien faucibus. Venenatis a condimentum vitae sapien pellentesque habitant. Eu turpis egestas pretium aenean pharetra magna. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nec dui nunc mattis enim ut. Porttitor eget dolor morbi non arcu risus. Porttitor lacus luctus accumsan tortor posuere ac ut. Ut porttitor leo a diam sollicitudin tempor id eu. Sem et tortor consequat id porta nibh venenatis. Vitae congue mauris rhoncus aenean. Leo urna molestie at elementum eu facilisis sed odio morbi. Ut diam quam nulla porttitor massa. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. A arcu cursus vitae congue mauris rhoncus. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Curabitur gravida arcu ac tortor dignissim convallis aenean. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Odio ut sem nulla pharetra diam sit amet nisl. Scelerisque purus semper eget duis at. Vitae sapien pellentesque habitant morbi tristique. Interdum velit euismod in pellentesque massa placerat duis ultricies. Sed egestas egestas fringilla phasellus faucibus. Sit amet consectetur adipiscing elit duis. Elit duis tristique sollicitudin nibh sit amet. Adipiscing tristique risus nec feugiat in fermentum posuere. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Eget dolor morbi non arcu risus. Eget aliquet nibh praesent tristique. Adipiscing commodo elit at imperdiet. Libero nunc consequat interdum varius sit amet mattis. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Vel pharetra vel turpis nunc. Neque sodales ut etiam sit amet nisl purus. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Penatibus et magnis dis parturient montes nascetur ridiculus. Ut placerat orci nulla pellentesque dignissim enim. Risus sed vulputate odio ut. Curabitur vitae nunc sed velit dignissim sodales. Pharetra convallis posuere morbi leo urna.'),
(CURRENT_TIMESTAMP, 'Lorem Ipall', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris a diam maecenas sed enim ut. Semper viverra nam libero justo laoreet. Purus viverra accumsan in nisl nisi. Lobortis elementum nibh tellus molestie nunc non. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Pulvinar pellentesque habitant morbi tristique senectus. Quam id leo in vitae turpis massa sed elementum tempus. Arcu non odio euismod lacinia at. Ornare aenean euismod elementum nisi quis eleifend quam. Bibendum neque egestas congue quisque egestas diam. Vitae tempus quam pellentesque nec nam. Vitae auctor eu augue ut lectus arcu bibendum at varius. Ac placerat vestibulum lectus mauris ultrices eros in. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Varius morbi enim nunc faucibus a pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies. At consectetur lorem donec massa sapien faucibus. Venenatis a condimentum vitae sapien pellentesque habitant. Eu turpis egestas pretium aenean pharetra magna. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nec dui nunc mattis enim ut. Porttitor eget dolor morbi non arcu risus. Porttitor lacus luctus accumsan tortor posuere ac ut. Ut porttitor leo a diam sollicitudin tempor id eu. Sem et tortor consequat id porta nibh venenatis. Vitae congue mauris rhoncus aenean. Leo urna molestie at elementum eu facilisis sed odio morbi. Ut diam quam nulla porttitor massa. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. A arcu cursus vitae congue mauris rhoncus. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Curabitur gravida arcu ac tortor dignissim convallis aenean. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Odio ut sem nulla pharetra diam sit amet nisl. Scelerisque purus semper eget duis at. Vitae sapien pellentesque habitant morbi tristique. Interdum velit euismod in pellentesque massa placerat duis ultricies. Sed egestas egestas fringilla phasellus faucibus. Sit amet consectetur adipiscing elit duis. Elit duis tristique sollicitudin nibh sit amet. Adipiscing tristique risus nec feugiat in fermentum posuere. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Eget dolor morbi non arcu risus. Eget aliquet nibh praesent tristique. Adipiscing commodo elit at imperdiet. Libero nunc consequat interdum varius sit amet mattis. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Vel pharetra vel turpis nunc. Neque sodales ut etiam sit amet nisl purus. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Penatibus et magnis dis parturient montes nascetur ridiculus. Ut placerat orci nulla pellentesque dignissim enim. Risus sed vulputate odio ut. Curabitur vitae nunc sed velit dignissim sodales. Pharetra convallis posuere morbi leo urna.');

INSERT INTO path_announcements
(anno_date_time, anno_title, anno_content)
VALUES
(CURRENT_TIMESTAMP, 'This Database Exists Now', 'Thanks to a local softwear developer the database for [REDACTED] finally exists, it will soon be used to create a mailing list and a blog! I hope this pleases my client [REDACTED]'),
(CURRENT_TIMESTAMP, 'This Database Exists Then', 'Thanks to a local softwear developer the database for [REDACTED] finally exists, it will soon be used to create a mailing list and a blog! I hope this pleases my client [REDACTED]'),
(CURRENT_TIMESTAMP, 'This Database Exists When', 'Thanks to a local softwear developer the database for [REDACTED] finally exists, it will soon be used to create a mailing list and a blog! I hope this pleases my client [REDACTED]');

INSERT INTO path_admin
(admin_username, admin_email, hash)
VALUES
('admin', 'pathSLC@leatherquest.org', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW');