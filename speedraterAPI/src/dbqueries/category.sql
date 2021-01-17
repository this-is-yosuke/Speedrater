-- Table Creation

CREATE TABLE category (
    categoryId SERIAL PRIMARY KEY,
    categoryName TEXT
)

-- Adding values

INSERT INTO category(categoryName)
VALUES('Food');

INSERT INTO category(categoryName)
VALUES('Games');

