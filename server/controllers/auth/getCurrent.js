const getCurrent = async (req, res) => {
	const { name, email, birthday, avatarURL, _id } = req.user;

	res.status(200).json({
		avatarURL,
		name,
		email,
		birthday,
		_id,
	});
};

module.exports = getCurrent;
