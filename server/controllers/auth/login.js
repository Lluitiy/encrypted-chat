const bcrypt = require("bcryptjs");

const { User } = require("../../models/userSchema");

const { HttpError, createTokens } = require("../../helpers");

const login = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (!user) {
		throw HttpError(401, "Email or password invalid"); //  throw HttpError(401, "Email invalid");
	}

	const passwordCompare = await bcrypt.compare(password, user.password);
	if (!passwordCompare) {
		throw HttpError(401, "Email or password invalid"); //  throw HttpError(401, "Password invalid");
	}

	const payload = {
		id: user._id,
	};

	const { accessToken, refreshToken } = createTokens(payload);

	await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });

	res.status(200).json({
		accessToken,
		refreshToken,
		user: {
			email: user.email,
			name: user.name,
			birthday: user.birthday,
		},
	});
};

module.exports = login;
