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
  console.log(req.query);
  if (req.query.startDate && req.query.endDate) {
    (async () => {
      try {
        commonResponse.data = await dbConnection.getVideosByDate(
          req.query.startDate,
          req.query.endDate
        );
        return res.status(200).json(commonResponse);
      } catch (e) {
        console.log(e);

        return res.status(400).json({
          error: e.message
        });
      }
    })();
  } else {
    (async () => {
      commonResponse.data = await dbConnection.getAllVideos();
      res.status(200).json(commonResponse);
    })();
  }
});

videoRouter.get("/video/:id", (req, res, next) => {
  if (!req.params.id)
    return res.status(400).json({
      error: "Missing ID."
    });
  if (isNaN(parseInt(req.params.id))) {
    return res.status(400).json({
      error: "ID is invalid."
    });
  }
  (async () => {
    commonResponse.data = await dbConnection.getVideo(req.params.id);
    res.status(200).json(commonResponse);
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
