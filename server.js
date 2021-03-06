import appRouters from "./app/routes/";
import express from "express";
import cors from "cors";
import logger from './app/lib/logger'

const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ staus: "server is running" });
});

app.use("/api", appRouters);

app.listen(process.env.PORT || 5000, (err) => {
  if (err) throw new Error(err);

  logger.info(
    `> express server is running on http://localhost:${
      process.env.PORT || 5000
    }`
  );
});

app.use("*", (req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
