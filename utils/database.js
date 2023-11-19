import mongoose from "mongoose";

// track the connection status
let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrIParser: true,
      useUnifiedTopology: true,
    });
    isConnected(true);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
