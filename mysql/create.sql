DROP TABLE IF EXISTS video_tracking;

CREATE TABLE IF NOT EXISTS video_tracking (
    id int AUTO_INCREMENT,
    video_name varchar(255) NOT NULL,
    brand varchar(255) NOT NULL,
    published datetime NOT NULL,
    video_count int DEFAULT 0,
    PRIMARY KEY (id)
);
