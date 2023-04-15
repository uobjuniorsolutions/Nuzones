CREATE TABLE IF NOT EXISTS ZONES (
    id   SERIAL NOT NULL,
    latitude DECIMAL(10,4) NOT NULL,
    longitude DECIMAL(10,4) NOT NULL,
    group_link VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    exact_name VARCHAR(255),
    description VARCHAR(255) NOT NULL,
    rating INT DEFAULT 0,
    deleted BOOLEAN DEFAULT FALSE,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
