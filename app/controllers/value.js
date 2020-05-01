import handleError from "../utils/handleError";
const NodeCache = require("node-cache");
const myCache = new NodeCache();

export const findValue = async (req, res) => {
  try {
    const value = req.params.value;
    const data = myCache.get("findValue" + String(value));
    if (data) {
      console.log("Data from cache findValue " + String(value));
      return res.status(200).json(data);
    }
    const B = 23 - value;
    const C = -21 - value;
    const result = [parseInt(value), B, C];
    myCache.set("findValue" + String(value), result);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return handleError(res, error);
  }
};
