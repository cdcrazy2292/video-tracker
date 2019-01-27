const mysql = require("mysql");
const customQueries = require("./db_data_initializer");

class DatabaseService {
  constructor(connection) {
    this.connection = connection;
  }

  bootstrapSampleData() {
    return new Promise((resolve, reject) => {
      this.connection.query(customQueries.deleteTableOnStart);
      this.connection.query(customQueries.createSchema);
      this.connection.query(
        customQueries.insertRowsQuery,
        [customQueries.initialDump],
        (err, results) => {
          if (err)
            return reject(
              new Error(
                `An error has occurred while initializing sample data on the database: \n ${err}`
              )
            );
          resolve(results);
        }
      );
    });
  }

  getAllVideos() {
    const query = `select * from video_tracker;`;
    return new Promise((resolve, reject) => {
      this.connection.query(query, (err, results) => {
        if (err) return reject(new Error(err));
        resolve(results);
      });
    });
  }

  getVideo(id) {
    const query = `
    select * from videos.video_tracker where id = ${id};
    `;
    return new Promise((resolve, reject) => {
      this.connection.query(query, (err, results) => {
        if (err) return reject(new Error(err));
        resolve(results);
      });
    });
  }

  getVideosByDate(startDate, endDate) {
    const query = `
    select * from videos.video_tracker 
    where published >= "${startDate}" and published <= "${endDate}";
    `;
    return new Promise((resolve, reject) => {
      this.connection.query(query, (err, results) => {
        if (err) return reject(new Error(err));
        resolve(results);
      });
    });
  }

  addVideo(video_name, brand, published) {
    const query = `
    insert into videos.video_tracker (video_name, brand, published)
    values ("${video_name}", "${brand}", "${published}");
    `;
    return new Promise((resolve, reject) => {
      this.connection.query(query, (err, results) => {
        if (err) return reject(new Error(err));
        resolve(results);
      });
    });
  }

  updateVideoCount(videoId) {
    const query = `
    update video_tracker 
    set video_count = video_count + 1
    where id = ${videoId}
    `;
    return new Promise((resolve, reject) => {
      this.connection.query(query, (err, results) => {
        if (err) return reject(new Error(err));
        resolve(results);
      });
    });
  }

  closeConnection() {
    console.log("Closing db connection");
    this.connection.end();
  }
}

const openConnection = config => {
  return new Promise((resolve, reject) => {
    if (!config.host) throw new Error("A host must be specified.");
    if (!config.user) throw new Error("A user must be specified.");
    if (!config.password) throw new Error("A password must be specified.");
    if (!config.port) throw new Error("A port must be specified.");
    resolve(new DatabaseService(mysql.createConnection(config)));
  });
};

module.exports = {
  openConnection: openConnection
};
