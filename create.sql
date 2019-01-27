DROP TABLE IF EXISTS video_tracking;

CREATE TABLE IF NOT EXISTS video_tracking (
    id int AUTO_INCREMENT,
    video_name varchar(255) NOT NULL,
    brand varchar(255) NOT NULL,
    published datetime NOT NULL,
    video_count int DEFAULT 0,
    PRIMARY KEY (id)
);

insert into video_tracking (video_name, brand, published)
values ('Flying Chickens', 'The DoDo', NOW());
insert into video_tracking (video_name, brand, published)
values ('Flying Pigs', 'The DoDo', NOW());
insert into video_tracking (video_name, brand, published)
values ('Charred Peppers', 'The Thrillist', NOW());
insert into video_tracking (video_name, brand, published)
values ('NYC Restaurant Week', 'The Thrillist', NOW());
insert into video_tracking (video_name, brand, published)
values ('The US Today', 'Now This', NOW());
insert into video_tracking (video_name, brand, published)
values ('LeBron Giving back to the Community', 'Now This', NOW());
insert into video_tracking (video_name, brand, published)
values ('Congress Fails Again", "Now This', 'Now This', NOW());
insert into video_tracking (video_name, brand, published)
values ('Japanese Tacos', 'The Thrillist', NOW());
insert into video_tracking (video_name, brand, published)
values ('Vegetarian Desserts', 'The Thrillist', NOW());
insert into video_tracking (video_name, brand, published)
values ('The Zeebras Kingdom', 'The DoDo', NOW());

