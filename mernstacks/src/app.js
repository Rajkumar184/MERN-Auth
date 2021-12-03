const express = require("express");
const app = express();
const port = process.env.PORT || 8001;

const dotenv = require("dotenv");

require("./db/conn");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Users = require("./models/userSchema");

dotenv.config({ path: "./.env" });

app.use(require("./router/auth"));

const cors = require("cors");
app.use(cors());

app.use(Users);

// app.use(loggingMiddleware);

// app.get("/", (req, res) => {
// 	res.send("Home Page");
// });

// app.get("/users", loggingMiddleware, (req, res) => {
// 	// console.log(req.admin);
// 	console.log("users page");
// 	res.send("Users Page");
// });

// function loggingMiddleware(req, res, next) {
// 	console.log(`Login ${new Date().toISOString()}: ${req.originalUrl}`);
// 	next();
// }

// function authorizeUsersAccess(req, res, next) {
// 	if (req.query.admin === "true") {
// 		req.admin = true;
// 		next();
// 	} else {
// 		res.send("ERROR: You must be an admin");
// 	}
// }

app.listen(port, () => {
	console.log(`listining to the port no. ${port}`);
});
