CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN default false,
PRIMARY KEY (id)
);

INSERT INTO tasks (task) VALUES ('Pick up milk.');
INSERT INTO tasks (task) VALUES ('Mow the lawn.');
INSERT INTO tasks (task) VALUES ('Call Shannon back.');