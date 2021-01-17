-- Table creation

CREATE TABLE reviews(
    reviewId Serial PRIMARY KEY,
    categoryId INTEGER REFERENCES category(categoryId),
    productId INTEGER REFERENCES product(productId),
    rating NUMERIC NOT NULL,
    critique VARCHAR(500) NOT NULL,
    reviewerId INTEGER REFERENCES users(userId),
    reviewDate DATE
)

-- Adding Values

INSERT INTO reviews(categoryId, productId, rating, reviewerId, critique)
Values();