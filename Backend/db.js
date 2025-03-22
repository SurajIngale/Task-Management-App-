import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("your-mongo-url");
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ Database Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
