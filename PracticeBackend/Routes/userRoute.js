// const express = require("express")
// const router = express.Router()
// const {allUsers, createUser, productToCart} = require("../Controllers/userController.js")
// const User = require("../DB/UserModel.js")

// router.get("/allUser", allUsers)
// router.post("/create-user", createUser)
// router.patch("/user/:userId/cart/:productId", productToCart)

// const data = async() =>{
//     const dt = await User.aggregate([
//         {
//             $lookup: {
//                 from: "product",
//                 localField: "cart",
//                 foreignField: "_id",
//                 as: "product"
//             }
//         },
//         {
//             $unwind: "$product"
//         },
//         {
//             $project: {
//                 _id: 0,
//                 "product.name": 1,
//                 "product.price": 1
//             }
//         }
//     ])

//     console.log(dt)
// }
// module.exports = {router, data}