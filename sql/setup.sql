-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS games CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL
);
-- table for games 
CREATE TABLE games (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  img VARCHAR,
  genre VARCHAR,
  title VARCHAR,
  user_id BIGINT,
  description VARCHAR,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
-- table for favorite game and catagorys
CREATE TABLE favorites (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  is_fav BOOLEAN NOT NULL DEFAULT(false),
  catagory VARCHAR,
  img VARCHAR,  
  title VARCHAR,
  games_id BIGINT,
  description VARCHAR,
  FOREIGN KEY (games_id) REFERENCES games(id)
);


-- game titels 
INSERT INTO games (img, genre, title, description)
VALUES 
('https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg/220px-Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg',
'FIRST PERSON SHOOTER',
'HALO COMBAT EVOLVED',
'MASTER CHIEF SAVING THE HUMAN RACE'),

('https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Gears_of_war_cover_art.jpg/220px-Gears_of_war_cover_art.jpg',
 'THIRD PERSON SHOOTER',
 'GEARS OF WAR',
 'LAST DITCH ATTEMPT TO SAVE HUMANITY FROM MONSTERS');

INSERT INTO users (email, password_hash)
VALUES 
 ('example@admin.com', 'khfahfiouhf')