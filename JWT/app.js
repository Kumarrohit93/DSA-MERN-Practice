const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 8000;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require("path");
const dbUrl = "mongodb://127.0.0.1:27017/backendPractice";
const ejsMate = require("ejs-mate");
const { AppError } = require("./middleware/AppError.js");
const jwt_secret = "123456788054654";
const cookieParser = require("cookie-parser");
const {
  protectByHeader,
  protectByCookie,
  checkRole,
} = require("./middleware/authMiddleware.js");
const upload = require("./middleware/multerConfig.js");
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
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
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
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

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

    const token = jwt.sign(
      { id: isExist._id, role: isExist.role },
      jwt_secret,
      {
        expiresIn: "1d",
      },
    );

    // res.status(200).json({
    //   success: true,
    //   token,
    //   id: isExist._id,
    //   role: isExist.role
    // });

    res.cookie("token", token, {
      httpOnly: true, // JS access nahi kar sakta (secure)
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.redirect("/upload");
  } catch (err) {
    throw new AppError(err.message, 500);
  }
});

app.get("/profile", protectByHeader, checkRole("user"), async (req, res) => {
  const userData = await user.findById(req.user.id);

  res.json({
    success: true,
    user: userData,
  });
});

app.get(
  "/admin/allusers",
  protectByHeader,
  checkRole("admin"),
  async (req, res) => {
    const userData = await user.findById(req.user.id);

    res.json({
      success: true,
      user: userData,
    });
  },
);

app.get(
  "/user/dashboard",
  protectByHeader,
  checkRole("user"),
  async (req, res) => {
    const userData = await user.findById(req.user.id);

    res.json({
      success: true,
      user: userData,
    });
  },
);

app.get("/upload", protectByCookie, (req, res) => {
  res.render("./upload.ejs");
});

app.post("/uploads", protectByCookie, upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(401).json({
      success: false,
      message: "No file uploaded!",
    });
  }
  res.status(200).json({
    success: true,
    message: "file uploaded",
    file: req.file.filename,
    path: req.file.path,
  });
});

app.get("/allusers", async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 3;

  const skip = (page - 1) * limit;
  const totalUsers = await user.countDocuments();
  const users = await user.find({}).skip(skip).limit(limit);
  res.json({
    message: "Success",
    pageNo: page,
    limitOnPerPage: limit,
    total: totalUsers,
    allUsers: users,
  });
});

app.get("/allData", async(req, res) => {
  const data = await user.find({})
  console.log(data[0])
  res.json({data})
})

app.listen(port, () => {
  console.log(`Sever is listening at port ${port}`);
});
