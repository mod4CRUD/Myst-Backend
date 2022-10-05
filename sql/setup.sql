-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS games CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL
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
