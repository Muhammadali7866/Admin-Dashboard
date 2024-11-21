import { User } from "@/app/lib/models";
import mongoose from "mongoose";
let isConnected: boolean = false;
export const connnectToDb = async (): Promise<void> => {
  try {
    if (isConnected) {
      console.log("Already connected to the database");
      return;
    }

    const db = await mongoose.connect(
      "mongodb+srv://alimuhammadsenarios:hNSs1CtdbERnJz6l@cluster0.6rdpi.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
    );

    isConnected = db.connection.readyState === 1; // Update connection status
    console.log({ isConnected });
    console.log("Database connection established");
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

const data = async () => {
  const user = new User({
    username: "JohnDoe",
    email: "john.doe@example.com",
    password: "password123",
  });
  await user.save(); // Save the user to the database
};
