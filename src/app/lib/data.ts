import { User } from "./models";
import { connnectToDb } from "./utils";
interface User {
  id: string; // or number, based on your data
  username: string;
  email: string;
  createdAt: Date | string; // Use `Date` if you convert strings to Date elsewhere
  isAdmin: boolean;
  isActive: boolean;
}
export const fetchUsers = async (): Promise<User[]> => {
  try {
    connnectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch Users");
  }
};
