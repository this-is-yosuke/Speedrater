-- Table creation

CREATE TABLE reviews(
    reviewId Serial PRIMARY KEY,
    categoryId INTEGER REFERENCES category(categoryId),
    productId INTEGER REFERENCES product(productId),
    rating NUMERIC,
    critique VARCHAR(500),
    reviewerId INTEGER REFERENCES user(userId),
    reviewDate DATE
)

-- Adding Values

INSERT INTO reviews()