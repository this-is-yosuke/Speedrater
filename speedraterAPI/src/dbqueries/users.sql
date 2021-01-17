-- Table Creation

CREATE TABLE users (
	userId SERIAL PRIMARY KEY,
	firstName TEXT,
	lastName TEXT,
	email TEXT,
	pass TEXT
);

-- Adding values
INSERT INTO users ('Joe', 'Shmoe', 'joeshmoe123@gmail.com', 'pass1')