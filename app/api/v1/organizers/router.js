const express = require("express");
const { createCMSOrganizer, createCMSUser } = require("./controller");
const { authenticateUser } = require("../../../middleware/auth");

const router = express.Router();

router.post("/organizers", createCMSOrganizer);
router.post("/admin", authenticateUser, createCMSUser);

module.exports = router;
