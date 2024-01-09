const express = require("express");
const { create } = require("./controller");
const upload = require("../../../middleware/multer");

const router = express.Router();

router.post("/images", upload.single("avatar"), create);

module.exports = router;
