DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

DROP DATABASE IF EXISTS nodejs_login;
CREATE DATABASE nodejs_login;
USE  nodejs_login;

ALTER TABLE examples ADD times varchar (30) after description;