CREATE TABLE IF NOT EXISTS ZONES (
    id   BIGINT NOT NULL AUTO_INCREMENT,
    latitude DECIMAL(10,4) NOT NULL,
    longitude DECIMAL(10,4) NOT NULL,
    group_link VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description LONGTEXT NOT NULL,
    rating INT DEFAULT 0,
    PRIMARY KEY (id)
);
