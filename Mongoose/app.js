const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 8000;
const dbUrl = "mongodb://127.0.0.1:27017/backendPractice";
const AppError = require("./CustomeErrors/Error.js");
const errorHandler = require("./Middleware/errorHandler.js");
const catchAsync = require("./Middleware/asyncHandler.js");
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

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
    max: 100,
    required: true,
  },
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Invaild email"],
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

app.post(
  "/getdata",
  catchAsync(async (req, res, next) => {
    const { name, age, email } = req.query;

    if (!name || !age || !email) {
      throw new AppError("Crediantials are missing!", 400);
    }

    const existingEmail = await user.findOne({ email });
    console.log(existingEmail);

    if (existingEmail) {
      throw new AppError("Email already exist!");
    }

    const data = new user({ name, age, email });
    const userCreate = await data.save();

    res.status(201).json({
      success: true,
      message: userCreate,
    });
  }),
);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
