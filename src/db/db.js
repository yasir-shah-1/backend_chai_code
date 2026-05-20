//   import mongoose from "mongoose";
//   import { DB_NAME } from "./constants.js";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Function to connect to MongoDB using Mongoose coz DB is another continent away from our backend code that's why we need to connect to it using mongoose and we need to provide the connection string which is stored in environment variable MONGO_URI and also we need to provide the database name which is stored in constants.js file as DB_NAME and we need to handle the connection errors and also we need to log the successful connection message and also we need to exit the process with an error code if there is an error while connecting to MongoDB and also we can add any cleanup code in finally block if needed. 

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI, { dbName: DB_NAME });
    console.log("Connected to MongoDB and connection instance is:", connectionInstance.connection.host, connectionInstance.connection.name);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code
  } finally {
    // Optional: You can add any cleanup code here if needed
  }
};

export default connectDB;