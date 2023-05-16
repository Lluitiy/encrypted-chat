const bcrypt = require("bcryptjs");

const { User } = require("../../models/userSchema");
const { HttpError } = require("../../helpers");

const register = async (req, res) => {
	const { name, email, password, birthday, nickName } = req.body;
	const isUser = await User.findOne({ email });

	if (isUser) {
		throw HttpError(409, "Email in use");
	}

	const hashPassword = await bcrypt.hash(password, 10);

	const newUser = await User.create({
		name,
		email,
		password: hashPassword,
		birthday,
		nickName,
	});

	res.status(201).json({
		user: {
			email: newUser.email,
			name: newUser.name,
			birthday: newUser.birthday,
			nickName: newUser.nickName,
		},
	});
};

module.exports = register;
