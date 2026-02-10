const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 8000;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require("path");
const dbUrl = "mongodb://127.0.0.1:27017/backendPractice";
const ejsMate = require("ejs-mate");

const jwt_secret = "123456788054654";

async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Invaild email"],
    required: true,
  },
  password: {
    type: String,
    minLength: 6,
    maxLength: 100,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

app.get("/registerPage", (req, res) => {
  res.render("./register.ejs");
});

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError("Credentials Missing", 400);
    }

    const isExist = await user.findOne({ email });

    if (isExist) {
      throw new AppError("Email already exist", 400);
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const data = new user({
      email,
      password: hashpassword,
    });

    await data.save();

    res.status(200).json({
      success: true,
      user: data,
    });
  } catch (err) {
    throw new AppError(err.message, 500);
  }
});

app.get("/loginPage", (req, res) => {
  res.render("./login.ejs");
});

console.log(jwt_secret);

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError("Credentials Missing", 400);
    }

    const isExist = await user.findOne({ email });

    console.log("body: ", req.body);

    if (!isExist) {
      throw new AppError("User does not exist", 400);
    }

    const isMatch = await bcrypt.compare(password, isExist.password);

    if (!isMatch) {
      throw new AppError("Wrong password", 400);
    }

    const token = jwt.sign({ id: user._id }, jwt_secret, { expiresIn: "1d" });

    res.status(200).json({
      success: true,
      token,
      id: isExist._id,
    });
  } catch (err) {
    throw new AppError(err.message, 500);
  }
});

app.listen(port, () => {
  console.log(`Sever is listening at port ${port}`);
});
