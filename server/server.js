const app = require("./app");
const { exit } = require("node:process");

require("dotenv").config();

const PORT = process.env.PORT;

const { connectionMongo } = require("./mongoDB/connectionMongo");

const start = async () => {
	try {
		await connectionMongo();
		app.listen(PORT, (err) => {
			if (err) {
				console.error(`Error at server launch:`, err);
				exit(1);
			}
			console.log(
				`Database connection successful. Server running. Use our API on port: ${PORT}`
			);
		});
	} catch (err) {
		console.error(
			`Server not running.Failed to launch application with error: ${err.message}`
		);
		exit(1);
	}
};

start();
