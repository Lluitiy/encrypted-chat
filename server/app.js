const express = require("express");

require("dotenv").config();

const authRouter = require("./routes/api/auth");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
	return res.send("Hello World qqqqqqq");
});
app.use((req, res) => {
	res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
	const { status = 500, message = "Server error" } = err;
	res.status(status).json({ message });
});

module.exports = app;
