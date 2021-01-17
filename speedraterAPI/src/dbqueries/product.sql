-- Table creation

CREATE TABLE product(
    productId SERIAL PRIMARY KEY,
    productName TEXT NOT NULL,
    company TEXT NOT NULL
)

-- Adding values

INSERT INTO product(productName, manufacturer)
Values('Splendee', 'HiuKim Yuen');

INSERT INTO product(productName, manufacturer)
Values("World's Finest Hot Sauce", 'Travis Williamson');
