const getCurrent = async (req, res) => {
	const { name, nickName, city, phone, email, avatarURL, birthday, _id } =
		req.user;

	res.status(200).json({
		name,
		nickName,
		city,
		phone,
		email,
		avatarURL,
		birthday,
		_id,
	});
};

module.exports = getCurrent;
