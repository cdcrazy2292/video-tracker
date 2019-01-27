const express = require("express");
const videoRouter = express.Router();

let dbConnection = null;
let commonResponse = {
  data: []
};

const reuseDBConnection = db => {
  dbConnection = db;
};

videoRouter.get("/videos", (req, res, next) => {
  (async () => {
    commonResponse.data = await dbConnection.getAllVideos();
    res.json(commonResponse).sendStatus(200);
  })();
});

videoRouter.post("/video", (req, res, next) => {
  if (
    !req.body ||
    !req.body.video_name ||
    !req.body.brand ||
    !req.body.published
  ) {
    return res.status(400).json({
      error: "Missing Parameters."
    });
  }
  const body = req.body;
  (async () => {
    console.log(body);
    const result = await dbConnection.addVideo(
      body.video_name,
      body.brand,
      body.published
    );
    console.log(result);
    res.status(201).json({
      affectedRows: result.affectedRows,
      insertId: result.insertId
    });
  })();
});

videoRouter.put("/video/", (req, res, next) => {
  res.status(400).json({
    error: "ID is missing."
  });
});

videoRouter.put("/video/:id", (req, res, next) => {
  if (isNaN(parseInt(req.params.id))) {
    return res.status(400).json({
      error: "ID is invalid."
    });
  }
  (async () => {
    const result = await dbConnection.updateVideoCount(req.params.id);
    res.status(202).json({
      message: `Success. ${result.message}`
    });
  })();
});

module.exports = {
  videoRouter: videoRouter,
  reuseDBConnection: reuseDBConnection
};
