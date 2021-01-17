-- Table creation

CREATE TABLE product(
    productId SERIAL PRIMARY KEY,
    productName TEXT NOT NULL,
    company TEXT NOT NULL
)

-- Adding values

INSERT INTO product(productName, company)
Values('Splendee', 'HiuKim Yuen');

INSERT INTO product(productName, company)
Values('Finest Hot Sauce', 'Travis Williamson');
