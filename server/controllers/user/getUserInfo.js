// const { Pet } = require("../../models/petSchema");

const getUserInfo = async (req, res) => {
	const {
		_id: owner,
		avatarURL,
		name,
		nickName,
		email,
		city,
		phone,
		birthday,
	} = req.user;
	// const pets = await Pet.find({ owner });

	res.status(200).json({
		user: {
			_id: owner,
			avatarURL,
			// pets: [...pets],
			name,
			nickName,
			email,
			city,
			phone,
			birthday,
		},
	});
};

module.exports = getUserInfo;
