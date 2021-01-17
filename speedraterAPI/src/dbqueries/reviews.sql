-- Table creation

CREATE TABLE reviews(
    reviewId Serial,
    category VARCHAR(50),
    product VARCHAR(100),
    rating NUMERIC,
    critique VARCHAR(500),
    reviewer TEXT,
    reviewDate DATE
)

-- Adding Values