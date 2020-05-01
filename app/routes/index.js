import express from "express";
import pattern from "./pattern";
import value from "./value";
import map from "./map";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ date: new Date() });
});

router.use("/findpattern", pattern);
router.use("/findvalue", value);
router.use("/findmap", map);

router.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Handle errors
router.use((err, req, res) => {
  res.status(err.status || 500);
  if (err.status === 500) {
    console.log(err.stack);
  }
  res.json({
    status: err.status,
    message: err.message,
    error: err.stack,
  });
});

export default router;
