const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 8000;
const dbUrl = "mongodb://127.0.0.1:27017/backendPractice";

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
    match: [/^\s+@\s+\.\s+$/, "Invaild email"],
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

app.post("/getdata", async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const data = { name, age, email };
    await user.save();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
