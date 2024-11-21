// pages/api/insertData.ts

import mongoose from "mongoose";
import { User, Product } from "./models"; // Import your models
import { connnectToDb } from "./utils";

// API Route to Insert Data
const insertData = async () => {
  try {
    await connnectToDb(); // Connect to MongoDB

    // Insert a User
    const newUser = new User({
      username: "john_doe",
      email: "john.doe@example.com",
      password: "securepassword",
      isAdmin: true,
      phone: "true",
      address: "123 Main St",
    });
    await newUser.save();

    // Insert a Product
    const newProduct = new Product({
      title: "Laptop",
      desc: "High-performance laptop",
      price: 1200,
      stock: 50,
      color: "Silver",
      size: "15 inch",
    });
    await newProduct.save();
    console.log("sucess");
  } catch (error) {
  } finally {
    mongoose.disconnect(); // Disconnect from MongoDB
  }
};

export default insertData;
