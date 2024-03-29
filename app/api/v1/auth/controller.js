const { signin } = require("../../../service/mongosee/auth");
const { StatusCodes } = require("http-status-codes");

const signinCms = async (req, res, next) => {
  try {
    console.log(req);
    const result = await signin(req);
    res.status(StatusCodes.CREATED).json({ data: { token: result } });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signinCms,
};
