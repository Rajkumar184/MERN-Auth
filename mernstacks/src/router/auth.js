const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/userSchema");
require("../db/conn");
const Authenticate = require("../middleware/authenticate");

router.get("/", (req, res) => {
	res.send("hello from simple server :)");
});

router.post("/register", async (req, res) => {
	const { name, email, phone, work, password, cpassword } = req.body;
	console.log(req.body);

	if (!name || !phone || !work || !password || !cpassword) {
		return res.status(422).json({ error: "plz filled the field properly" });
	}

	try {
		const userExist = await Users.findOne({ email: email });
		const userPhone = await Users.findOne({ phone: phone });

		if (userExist) {
			return res.status(422).json({ error: " Email is already Exist " });
		} else if (password !== cpassword) {
			return res.status(422).json({ error: " Password is not matching " });
		} else if (!userPhone) {
			return res
				.status(422)
				.json({ error: " Please provide another contact No " });
		} else {
			const user = new Users({ name, email, phone, work, password, cpassword });

			await user.save();

			res.status(201).json({ message: "User registered Succesfully" });
		}
	} catch (err) {
		console.log(err);
	}
});

// create the user login
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ error: "Plz Filled the data" });
		}

		//checking email
		const checkUser = await Users.findOne({ email: email });
		if (!checkUser) {
			res.status(401).json({ message: "Invalid Credentials please register!" });
		}

		//checking password
		const checkPassword = await bcrypt.compare(password, checkUser.password);
		if (!checkPassword) {
			res.status(401).json({ message: "Invalid Credentials!" });
		}

		const token = await checkUser.generateAuthToken();

		res.status(201).cookie("jwt", token, {
			expires: new Date(Date.now() + 1800000),
			httpOnly: true,
		});

		res.status(201).send("User Login successFully!");
	} catch (err) {
		console.log(err);
	}
});

// create the about page

router.get("/about", Authenticate, async (req, res) => {
	try {
		const userProfile = await Users.findById(req.user.id);

		userProfile.password = undefined;

		res.status(201).send({ userProfile });
	} catch (error) {
		return next(new Error(error.message));
	}
});

module.exports = router;
