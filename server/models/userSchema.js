const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");

const passRegexp = /^(?=.{8,32}$)([0-9A-Za-z])*$/;
const nameRegexp = /^(?=.{2,32}$)([A-Za-z])*$/;
const emailRegexp =
	// eslint-disable-next-line no-useless-escape
	/^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;
const dateRegExp =
	/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
// eslint-disable-next-line no-useless-escape

const userSchema = new Schema(
	{
		name: {
			type: String,
			match: nameRegexp,
			required: true,
		},
		email: {
			type: String,
			match: emailRegexp,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			minlength: 8,
			required: true,
		},
		accessToken: {
			type: String,
			default: "",
		},
		refreshToken: {
			type: String,
			default: "",
		},
		avatarURL: {
			type: String,
			default:
				"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
		},
		birthday: {
			type: String,
			match: dateRegExp,
			default: "",
		},
	},
	{ versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveErrors);

const registerSchema = Joi.object({
	name: Joi.string().min(2).max(32).pattern(nameRegexp).required(),
	email: Joi.string().pattern(emailRegexp).min(10).max(63).required(),
	password: Joi.string().pattern(passRegexp).min(8).max(32).required(),
});

const loginSchema = Joi.object({
	email: Joi.string().pattern(emailRegexp).min(10).max(63).required(),
	password: Joi.string().pattern(passRegexp).min(7).max(32).required(),
});

const refreshSchema = Joi.object({
	refreshToken: Joi.string().required(),
});

const userSchemas = {
	registerSchema,
	loginSchema,
	refreshSchema,
};

const User = model("user", userSchema);

module.exports = {
	User,
	userSchemas,
};
