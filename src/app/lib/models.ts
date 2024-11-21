import mongoose, { Document, Schema } from "mongoose";

// user Interface
interface IUSer extends Document {
  username: string;
  email?: string;
  password?: string;
  img?: string;
  createdAt: Date;
  isAdmin: boolean;
  isActive: boolean;
  phone?: string;
  address?: string;
}

// Product Interface
interface IProduct extends Document {
  title?: string;
  desc?: string;
  price: number;
  stock: number;
  img?: string;
  color?: string;
  size?: string;
}

// user Schema

const userSchema: Schema<IUSer> = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema: Schema<IProduct> = new Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
);

// create models
// Check if models exist before defining them
const User = mongoose.models.User || mongoose.model<IUSer>("User", userSchema);
const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export { User, Product };
