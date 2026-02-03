const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: [{
        type: String,
        required: true
    }],
    quantity: {
        type: Number
    },
    category: {
        type: String,
        index: true
    },
}, {timestamps: true})

const Product = new mongoose.model("product", productSchema)

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: [
        {
            city: String,
            pincode: Number, 
            state: String
        }
    ]
})

const User = new mongoose.model("user", userSchema)


const cartSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    count: {
        type: Number
    }
})

const Cart = new mongoose.model("cart", cartSchema)