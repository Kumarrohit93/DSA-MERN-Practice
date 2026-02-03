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

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  city: {
    type: String,
  },
  role: {
    type: String,
  },
  salary: {
    type: Number,
  },
  isActive: {
    type: String,
  },
});

const clients = mongoose.model("client", clientSchema);

// const storeData = async() => {
//   const data = await clients.insertMany([
//  {name:"Rohit", age:22, city:"Delhi", role:"user", salary:20000, isActive:true},
//  {name:"Aman", age:25, city:"Mumbai", role:"admin", salary:40000, isActive:true},
//  {name:"Neha", age:19, city:"Delhi", role:"user", salary:15000, isActive:false},
//  {name:"Simran", age:28, city:"Pune", role:"user", salary:35000, isActive:true},
//  {name:"Rahul", age:30, city:"Noida", role:"manager", salary:50000, isActive:true},
//  {name:"Pooja", age:21, city:"Delhi", role:"user", salary:18000, isActive:false},
//  {name:"Kunal", age:24, city:"Jaipur", role:"user", salary:22000, isActive:true},
//  {name:"Ankit", age:27, city:"Mumbai", role:"admin", salary:45000, isActive:true}
// ]);

// console.log("data is saveed in db!")
// }

// storeData()

const getData = async () => {
  const data = await clients.countDocuments({city: "Jaipur"});
  console.log(data);
};

getData();
