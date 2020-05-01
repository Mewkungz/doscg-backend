import handleError from "../utils/handleError";
const NodeCache = require("node-cache");
const myCache = new NodeCache();

export const findPattern = async (req, res) => {
  try {
    const data = myCache.get("findPattern");
    if (data) {
      console.log("Data from cache");
      return res.status(200).json(data);
    }
    var result = [3];
    var len = 7;
    const patternPlus = 2;
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
