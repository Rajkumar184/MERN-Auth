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

router.post("/register", async (req, res, next) => {
	try {
		const { name, email, phone, work, password, cpassword } = req.body;

		if (!name || !email || !phone || !work || !password || !cpassword) {
			return next(new Error("All fields are mandatory"));
		}

		if (password !== cpassword) {
			return next(new Error("Password and Confirm Password not matching"));
		}

		const userExists = await Users.findOne({ email: email });

		if (userExists) {
			return next(new Error("Already registered please Login"));
		}

		// const userPhone = await Users.findOne({ phone: phone });
		// if (!userPhone) {
		// 	return next(new Error(": Please provide another contact No "));
		// }

		await Users.create({
			name,
			email,
			phone,
			work,
			password,
			cpassword,
		});

		res.status(201).json({
			success: true,
			message: "Register successfully",
		});
	} catch (error) {
		return next(new Error(error));
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
		console.log(`the token part ${token}`);

		res.status(201).cookie("jwt", token, {
			expires: new Date(Date.now() + 1800000),
			httpOnly: true,
			// secure:true
		});

		res.status(201).send("User Login successFully!");
	} catch (err) {
		console.log(err);
	}
});

// create the about page

router.get("/about", Authenticate, async (req, res, next) => {
	try {
		const userProfile = await Users.findById(req.user.id);

		userProfile.password = undefined;
		userProfile.cpassword = undefined;

		res.status(201).send({ userProfile });
	} catch (error) {
		return next(new Error(error.message));
	}
});

// create the contact page

router.get("/getdata", Authenticate, async (req, res, next) => {
	try {
		const userProfile = await Users.findById(req.user.id);

		userProfile.password = undefined;
		userProfile.cpassword = undefined;

		res.status(201).send({ userProfile });
	} catch (error) {
		return next(new Error(error.message));
	}
});

router.post("/contact", Authenticate, async (req, res, next) => {
	try {
		const { name, email, phone, message } = req.body;

		if (!name || !email || !phone || !message) {
			console.log("error in contact form");
			return res.json({ error: "plz filled the contact form" });
		}

		const userContact = await Users.findOne({ _id: req.user });

		if (userContact) {
			const userMessage = await userContact.addMessage(
				name,
				email,
				phone,
				message
			);
			await userContact.save();
			res.status(201).json({
				success: true,
				message: "User Contact Successfully",
			});
		}
	} catch (error) {
		return next(new Error(error.message));
	}
});

module.exports = router;
