import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("DB is connected ");
  } catch (error) {
    console.log("error:", error.message);
    process.exit(1); // if failure (code 1), exit the process
  }
};
