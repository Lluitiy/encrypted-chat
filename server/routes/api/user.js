const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/user");

const { ctrlWrapper } = require("../../helpers");

const {
	validateBody,
	authenticate,
	isValidId,
	upload,
} = require("../../middlewares");

const { userSchemas } = require("../../models/userSchema");

router.get("/", authenticate, ctrlWrapper(ctrl.getUserInfo));

module.exports = router;
