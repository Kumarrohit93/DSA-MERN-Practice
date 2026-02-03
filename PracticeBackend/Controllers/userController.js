const User = require("../DB/UserModel.js");

const createUser = async (req, res) => {
  const { name, email } = req.body;

  const data = new User({
    name,
    email,
  });

  await data.save();
  console.log(data);
};

const allUsers = async (req, res) => {
  const data = await User.find();
  res.json({ message: "All Users", data });
};

const productToCart = async (req, res) => {
  const { userId, productId } = req.params;
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $push: { cart: productId } },
    { new: true }
  ).populate("cart");
   res.json(updatedUser);
  console.log("Success")
};

module.exports = { allUsers, createUser, productToCart };
