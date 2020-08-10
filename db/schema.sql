### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger
(
	ID INT NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);