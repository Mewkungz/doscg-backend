import handleError from "../utils/handleError";
const NodeCache = require("node-cache");
const myCache = new NodeCache();
const axios = require("axios");

export const findMap = async (req, res) => {
  try {
    const cache = myCache.get("findMap");
    if (cache) {
      console.log("Data from cache findMap");
      return res.status(200).json(cache);
    }
    const googleAPIKey = process.env.MAP;
    const scg = "13.8058845,100.5353377";
    const central = "13.7466356,100.5371411";
    const result = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${scg}&destination=${central}&alternatives=true&key=${googleAPIKey}`
    );
    myCache.set("findMap", result.data);
    return res.status(200).json(result.data);
  } catch (error) {
    console.log(error);
    return handleError(res, error);
  }
};
