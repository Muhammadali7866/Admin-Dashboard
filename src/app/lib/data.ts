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
export const fetchUsers = async (
  q: string,
  page: number
): Promise<{ users: User[]; count: number }> => {
  try {
    const ITEM_PER_PAGE = 2;
    const regex = new RegExp(q, "i");
    console.log({ skipValue: ITEM_PER_PAGE * (page - 1) });
    console.log({ page });

    connnectToDb();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    // const count = await User.find({ username: { $regex: regex } }).count();
    const count = await User.countDocuments({ username: { $regex: regex } });

    return { users, count };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch Users");
  }
};
