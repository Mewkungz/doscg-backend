import handleError from "../utils/handleError";
const NodeCache = require("node-cache");
const myCache = new NodeCache();

export const findMap = async (req, res) => {
  try {
    const value = req.params.value;
    const cache = myCache.get("findMap");
    if (cache) {
      console.log("Data from cache findMap");
      return res.status(200).json(cache);
    }
    const B = 23 - value;
    const C = -21 - value;
    const result = [parseInt(value), B, C];
    myCache.set("findMap", result);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return handleError(res, error);
  }
};
