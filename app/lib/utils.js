import mongoose from "mongoose";

// Move the connection object outside of the function to maintain its state across calls
const connection = {};

export const connectToDB = async () => {
    if (connection.isConnected) {
        // If already connected, log it and do nothing else
        console.log("Using existing database connection");
        return;
    }
    
    try {
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to db", error);
        throw new Error("Error connecting to db");
    }
};
