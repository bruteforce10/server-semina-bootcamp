const express = require("express");
const { createCMSOrganizer, createCMSUser } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middleware/auth");

const router = express.Router();

router.post(
  "/organizers",
  authenticateUser,
  authorizeRoles("owner"),
  createCMSOrganizer
);
router.post(
  "/admin",
  authenticateUser,
  authorizeRoles("organnizer"),
  createCMSUser
);

module.exports = router;
