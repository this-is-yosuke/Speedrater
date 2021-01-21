-- Table Creation

CREATE TABLE users (
	userId SERIAL PRIMARY KEY,
	firstName TEXT NOT NULL,
	lastName TEXT NOT NULL,
	email TEXT,
	pass TEXT NOT NULL,
	roll TEXT NOT NULL 
);

-- Adding values
INSERT INTO users(firstName, lastName, email, pass, roll) 
VALUES('Joe', 'Shmoe', 'joeshmoe123@gmail.com', 'pass1', 'user');

INSERT INTO users(firstName, lastName, email, pass) 
VALUES('Jane', 'Doe', 'janedoe123@gmail.com', 'pass2', 'user');

INSERT INTO users(firstName, lastName, email, pass) 
VALUES('Donald', 'Trump', 'thedonald@gmail.com', 'pass3', 'user');

INSERT INTO users(firstName, lastName, email, pass) 
VALUES('Iago', 'Pereira', 'iago567@gmail.com', 'pass4', 'user');

INSERT INTO users(firstName, lastName, email, pass) 
VALUES('Kenny', 'Bui', 'bui9999@gmail.com', 'pass5', 'user');

INSERT INTO users(firstName, lastName, email, pass) 
VALUES('Some', 'Body', 'sumbod@gmail.com', 'pass6', 'admin');

