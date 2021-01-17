-- Table Creation

CREATE TABLE category (
    categoryId SERIAL PRIMARY KEY,
    categoryName TEXT
)

-- Adding values

INSERT INTO category(categoryName)
VALUES('Restaurants');

INSERT INTO category(categoryName)
VALUES('Hotels');

INSERT INTO category(categoryName)
VALUES('Television');

INSERT INTO category(categoryName)
VALUES('Movies');

INSERT INTO category(categoryName)
VALUES('Video Games');

INSERT INTO category(categoryName)
VALUES('Board Games');
