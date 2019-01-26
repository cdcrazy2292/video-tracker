module.exports = {
  port: process.env.PORT || 9000,
  mysqlConfig: {
    host: process.env.DATABASE_HOST || "127.0.0.1",
    database: "videos",
    user: "groupnine",
    password: "111",
    port: 3306
  }
};
