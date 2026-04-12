import express from "express"; 
import gamesRoutes from "./routes/gamesRoutes.js";
import { connectToDB } from "./config/db.js";
import dotenv from "dotenv";

// Allows us to use vars from .env file
dotenv.config();

// Create express js app
const app = express();
const PORT = process.env.PORT; 

// Connect to the mongoDB database
connectToDB();

// Make the app use the defined routes in the "gamesRoutes.js" file.
// They will be accessed through /api/games/
app.use("/api/games", gamesRoutes);

// Start the server on port 5001
app.listen(PORT, () => {
    console.log("Server started on port:", PORT);
});
