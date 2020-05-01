import handleError from "../utils/handleError";
const NodeCache = require("node-cache");
const myCache = new NodeCache();

export const findPattern = async (req, res) => {
  try {
    const cache = myCache.get("findPattern");
    if (cache) {
      console.log("Data from cache");
      return res.status(200).json(cache);
    }
    var third = 5;
    const patternPlus = 2;
    var result = [third-patternPlus];
    var len = 7;
    let number = 0;
    for (let i = 1; i < len; i++) {
      if (i === 1) {
        number = 3;
      } else {
        number = result[i - 1] + patternPlus * (i - 1);
      }
      result.push(number);
    }
    myCache.set("findPattern", result);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return handleError(res, error);
  }
};
