const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const connectionMongo = async () => {
	return mongoose.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};
mongoose.set("strictQuery", true);

module.exports = {
	connectionMongo,
};
