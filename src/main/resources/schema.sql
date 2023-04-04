CREATE TABLE IF NOT EXISTS ZONES (
    id   SERIAL NOT NULL,
    latitude DECIMAL(10,4) NOT NULL,
    longitude DECIMAL(10,4) NOT NULL,
    group_link VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    rating INT DEFAULT 0,
    deleted BIT DEFAULT 0,
    created_on DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
