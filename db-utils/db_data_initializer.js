const deleteTableOnStart = `DROP TABLE IF EXISTS videos.video_tracker`;
const initialDump = [
  ["Flying Chickens", "The DoDo", new Date(2012, 11, 22, 17, 25, 12)],
  ["Flying Pigs", "The DoDo", new Date(2014, 5, 13, 3, 21, 13)],
  ["Charred Peppers", "The Thrillist", new Date(2016, 6, 21, 11, 43, 12)],
  ["NYC Restaurant Week", "The Thrillist", new Date(2017, 2, 21, 3, 45, 5)],
  ["The US Today", "Now This", new Date(2019, 1, 12, 14, 55, 13)],
  [
    "LeBron Giving back to the Community",
    "Now This",
    new Date(2018, 3, 14, 9, 33, 55)
  ],
  ["Congress Fails Again", "Now This", new Date(2017, 4, 1, 2, 29, 12)],
  ["Japanese Tacos", "The Thrillist", new Date(2018, 5, 1, 12, 12, 12)],
  ["Vegetarian Desserts", "The Thrillist", new Date(2016, 3, 30, 4, 55, 12)],
  ["The Zeebras' Kingdom", "The DoDo", new Date(2013, 4, 1, 4, 3, 9)]
];

const insertRowsQuery = `INSERT INTO videos.video_tracker (video_name, brand, published) VALUES ?`;

const createSchema = `
create table if not exists videos.video_tracker (
ID int auto_increment, 
video_name varchar(255) NOT NULL,
brand varchar(255) NOT NULL,
published datetime NOT NULL, 
video_count int NOT NULL default 0,
primary key (ID, video_name, brand)
);
`;

module.exports = {
  deleteTableOnStart: deleteTableOnStart,
  initialDump: initialDump,
  insertRowsQuery: insertRowsQuery,
  createSchema: createSchema
};
