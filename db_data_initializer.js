const deleteTableOnStart = `DROP TABLE IF EXISTS videos.video_tracker`;
const initialDump = [
  ["Flying Chickens", "The DoDo", new Date()],
  ["Flying Pigs", "The DoDo", new Date()],
  ["Charred Peppers", "The Thrillist", new Date()],
  ["NYC Restaurant Week", "The Thrillist", new Date()],
  ["The US Today", "Now This", new Date()],
  ["LeBron Giving back to the Community", "Now This", new Date()],
  ["Congress Fails Again", "Now This", new Date()],
  ["Japanese Tacos", "The Thrillist", new Date()],
  ["Vegetarian Desserts", "The Thrillist", new Date()],
  ["The Zeebras' Kingdom", "The DoDo", new Date()]
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
