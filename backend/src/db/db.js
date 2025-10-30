import mongoose from "mongoose";
import 'dotenv/config';

const MONGO_URL = process.env.MONGO_URL;

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URL);
    if (connect) {
      console.log("Database connection is successful");
    }
    else {
      console.log("Database connection failed");
    }
  }
  catch (err) {
    console.log("Error while connecting to mongoDB", err);
  }
}

export default connectDb;