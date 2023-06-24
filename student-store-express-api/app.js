// YOUR CODE HERE
const express = require("express");
const debug = require("debug")("app");
const storeRouter = require("./router/routes");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use("/store", storeRouter);

try {
  app.listen(port, () => {
    console.log(`🚀 Server listening on port ` + port);
  });
} catch (error) {
  console.error(`Failed to start server: ${error}`);
}

module.exports = app;
