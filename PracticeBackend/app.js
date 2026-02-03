const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3030;
const dbUrl = "mongodb://127.0.0.1:27017/backendPractice";
const path = require("path");
const ejsMate = require("ejs-mate");
// const { type } = require("os");
// const { number } = require("motion");

async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

// const productSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
// });

// const Product = mongoose.model("Product", productSchema);

// const cartSchema = new mongoose.Schema({
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product",
//     required: true,
//   },
// });

// const userSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// const user = new mongoose.model("User", userSchema);

// const storeUserData = async() => {
//   await db.user.createIndex
//   console.log("Data is saved")
// };

// const Cart = mongoose.model("Cart", cartSchema);

// app.get("/", (req, res) => {
//   res.render("./form.ejs");
// });

// app.post("/data", async (req, res) => {
//   const { title, description, image, price } = req.body;
//   const data = new Product({ title, description, image, price });

//   await data.save();
//   await Cart.create({ productId: data._id });

//   res.redirect("/allProducts");
// });

// app.get("/allProducts", async (req, res) => {
//   const productData = await Product.find({});
//   res.render("./product.ejs", { productData });
// });

// app.get("/cart-add/:id", async (req, res) => {
//   const data = await Cart.create({ productId: req.params.id });
//   res.redirect("/allProducts");
//   console.log(data);
// });

// // const fun = async() => {

// // console.log("LookUp data: ", data)
// // }

// // pop()
// // fun()

// app.get("/cart", async (req, res) => {
//   const cart = await Cart.find({}).populate("productId");
//   const data = await Cart.aggregate([
//     {
//       $lookup: {
//         from: "products",
//         localField: "productId",
//         foreignField: "_id",
//         as: "product",
//       },
//     },
//     {
//       $unwind: "$product",
//     },
//     {
//       $group: {
//         _id: null,
//         total: {
//           $sum: "$product.price",
//         },
//       },
//     },
//   ]);
//   res.render("./cart.ejs", { cart, data });
// });

const clientSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String
  },
  city: {
    type: String
  },
  role: {
    type: String
  },
  salary: {
    type: Number
  },
  isActive: {
    type: String
  }
})

mongoose.model("client", clientSchema)

const storeData = async() => {
  const data = await db.clients.insertMany([
 {name:"Rohit", age:22, city:"Delhi", role:"user", salary:20000, isActive:true},
 {name:"Aman", age:25, city:"Mumbai", role:"admin", salary:40000, isActive:true},
 {name:"Neha", age:19, city:"Delhi", role:"user", salary:15000, isActive:false},
 {name:"Simran", age:28, city:"Pune", role:"user", salary:35000, isActive:true},
 {name:"Rahul", age:30, city:"Noida", role:"manager", salary:50000, isActive:true},
 {name:"Pooja", age:21, city:"Delhi", role:"user", salary:18000, isActive:false},
 {name:"Kunal", age:24, city:"Jaipur", role:"user", salary:22000, isActive:true},
 {name:"Ankit", age:27, city:"Mumbai", role:"admin", salary:45000, isActive:true}
]);

console.log("data is saveed in db!")
}

storeData()

app.listen(port, () => {
  console.log("Server is listening at port ", port);
});
