import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connnectToDb } from "./utils";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

interface useFormData {
  username: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  isAdmin: boolean;
  isActive: boolean;
}
interface useFormDataa {
  username: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  isAdmin: boolean;
  isActive: boolean;
  id: string;
  [key: string]: string | boolean | undefined; // Add this index signature
}
export const addUsers = async (formData: FormData) => {
  "use server";

  try {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const isAdmin = formData.get("isAdmin") === "true"; // Convert to boolean
    const isActive = formData.get("isActive") === "true"; // Convert to boolean

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData: useFormData = {
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    };

    connnectToDb();
    const newUser = new User(userData);
    await newUser.save();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const updateUser = async (formData: FormData) => {
  "use server";

  try {
    const username = formData.get("username") as string;
    const id = formData.get("id") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const isAdmin = formData.get("isAdmin") === "true"; // Convert to boolean
    const isActive = formData.get("isActive") === "true"; // Convert to boolean

    const userFields: useFormDataa = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
      id,
    };

    connnectToDb();
    Object.keys(userFields).forEach(
      (key) => (userFields[key] === "" || undefined) && delete userFields[key]
    );

    await User.findByIdAndUpdate(id, userFields);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const deleteUser = async (formData: FormData) => {
  "use server";

  try {
    const id = formData.get("id") as string;

    connnectToDb();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user!");
  }
  revalidatePath("/dashboard/users");
};
