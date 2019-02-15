create database teste

use teste


CREATE TABLE animals (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(30) NOT NULL,
     idade integer,
     createdAt DateTime,
     updatedAt DateTime,
     PRIMARY KEY (id)
);