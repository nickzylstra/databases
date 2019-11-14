DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  CONSTRAINT user_id PRIMARY KEY (user_id)
);

CREATE TABLE messages (
  message_id INTEGER NOT NULL AUTO_INCREMENT,
  text VARCHAR(140) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  room VARCHAR(50) NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  CONSTRAINT message_id PRIMARY KEY (message_id)
);


CREATE TABLE friendships (
  friendship_id INTEGER NOT NULL AUTO_INCREMENT,
  user1_id INTEGER NOT NULL,
  user2_id INTEGER NOT NULL,
  FOREIGN KEY (user1_id) REFERENCES users (user_id),
  FOREIGN KEY (user2_id) REFERENCES users (user_id),
  CONSTRAINT friendship_id PRIMARY KEY (friendship_id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

