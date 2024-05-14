const Users = require("../../api/v1/users/model");
const Organizers = require("../../api/v1/organizers/model");
const { BadRequestError } = require("../../errors");
const { StatusCodes } = require("http-status-codes");

const createOrganizer = async (req) => {
  const { organizer, email, role, password, confirmPassword, name } = req.body;
  if (password !== confirmPassword) {
    throw new BadRequestError("Password dan confirm password harus sama");
  }

  const result = await Organizers.create({ organizer });
  const users = await Users.create({
    email,
    name,
    role,
    password,
    organizer: result._id,
  });

  delete users._doc.password;

  return users;
};

const createUsers = async (req) => {
  const { email, name, role, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    throw new BadRequestError("Password dan confirm password harus sama");
  }

  const result = await Users.create({
    email,
    name,
    role,
    password,
    organizer: req.user.organizer,
  });

  delete result._doc.password;

  return result;
};

const getAllUsers = async (req) => {
  const result = await Users.find();

  return result;
};

module.exports = {
  createOrganizer,
  createUsers,
  getAllUsers,
};
