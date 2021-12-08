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
app.use(require("./router/auth"));

dotenv.config({ path: "./.env" });

const cors = require("cors");
app.use(cors());

app.use(Users);

// //register route
// app.use(require("./router/register"));

// //login route
// app.use(require("./router/login"));

//logout route
// app.use(require("./router/logout"));

//about route
// app.use(require("./router/about"));

// contact route
// app.use(require("./router/contact"));

//user data route
// app.use(require("./router/getdata"));

// //delete route
// const deleteRoute = require("./routes/deleteRoute");
// app.use("/", deleteRoute);

// //forgot pass sending link
// const forgotPassRoute = require("./routes/forgotPassRoute");
// app.use("/", forgotPassRoute);

// //change password
// const changePassRoute = require("./routes/changePassRoute");
// app.use("/", changePassRoute);

app.listen(port, () => {
	console.log(`listining to the port no. ${port}`);
});
