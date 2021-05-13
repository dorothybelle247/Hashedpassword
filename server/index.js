const express = require("express");
const volleyball = require("volleyball");
// const bodyParser = require("body-parser");
// const cors = require("cors");

const app = express();

const auth = require('./auth');

app.use(volleyball);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "beutiful world"
  });
});

app.use('/auth', auth)

function notFound(req, res, next) {
  res.status(404);
  const error = new Error("not found -" + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listening on port", port);
});