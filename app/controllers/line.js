import handleError from "../utils/handleError";

export const findPattern = async (req, res) => {
  try {
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return handleError(res, error);
  }
};
