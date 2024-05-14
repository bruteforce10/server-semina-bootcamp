const { StatusCodes } = require("http-status-codes");
const {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
} = require("../../../service/mongosee/categories");

const create = async (req, res, next) => {
  try {
    const result = await createCategories(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllCategories(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getOneCategories(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    // const checkCategories = await Categories.findById(id);
    // if (!checkCategories) {
    //   return res.status(404).json({ message: "Category not found" });
    // }
    // checkCategories.name = req.body.name;
    // await checkCategories.save();

    const result = await updateCategories(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteCategories(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  update,
  create,
  destroy,
  find,
  index,
};
