const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/userSchema");
require("../db/conn");

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

		if (userExist) {
			return res.status(422).json({ error: " Email is already Exist " });
		} else if (password != cpassword) {
			return res.status(422).json({ error: " Password is not matching " });
		} else {
			const user = new Users({ name, email, phone, work, password, cpassword });

			const userRegister = await user.save();

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

		const userLogin = await Users.findOne({ email: email });

		console.log(userLogin);

		if (userLogin) {
			const isMatch = await bcrypt.compare(password, userLogin.password);

			const token = await userLogin.generateAuthToken();
			console.log(`the token part ${token}`);

			res.cookie("jwt", token, {
				expires: new Date(Date.now() + 50000),
				httpOnly: true,
				// secure:true
			});

			if (!isMatch) {
				res.status(400).json({ error: "Invalid Detailsp" });
			} else {
				res.status(200).json({ message: "user login Successfully" });
			}
		} else {
			res.status(400).json({ error: "Invalid Detailse" });
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
