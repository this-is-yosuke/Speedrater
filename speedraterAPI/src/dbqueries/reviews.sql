-- Table creation

CREATE TABLE reviews(
    reviewId Serial PRIMARY KEY,
    categoryId INTEGER REFERENCES category(categoryId),
    productId INTEGER REFERENCES product(productId),
    rating NUMERIC NOT NULL,
    critique VARCHAR(500) NOT NULL,
    userId INTEGER REFERENCES users(userId),
    reviewDate DATE
)

-- Adding Values
-- Users: 1)Joe, 2)Jane, 3)Donald, 4)Iago, 5)Kenny
-- Categories: 1)Food, 2)Games
-- Products: 11)Splendee, 12)Finest_Hot_Sauce

INSERT INTO reviews(categoryId, productId, rating, reviewerId, critique)
Values('2', '11', '3', '1', 'There are definitely better games out there. As a Splendor knockoff, though, 
it does its job quite well. It lacks the snazzy appearance of the original, but it is still the same entertaining
gem-collecting diversion.');

INSERT INTO reviews(categoryId, productId, rating, reviewerId, critique)
Values('2', '11', '1', '2', 'I only got this because my grandkids told me I needed a hobby. Phones these days 
confuse me. I have no idea what I am doing.');

INSERT INTO reviews(categoryId, productId, rating, reviewerId, critique)
Values('1', '12', '5', '3', 'This hot sauce is absolutely fantastic. This is what America needs to be great again.');

INSERT INTO reviews(categoryId, productId, rating, reviewerId, critique)
Values('1', '12', '4', '4', 'I think this is good hot sauce, but the recipe definitely could be improved a little.');

INSERT INTO reviews(categoryId, productId, rating, reviewerId, critique)
Values('1', '12', '2', '5', 'I honestly do not know what the big deal is. This is just hot sauce.');

