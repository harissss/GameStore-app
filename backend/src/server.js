import express from "express"; 
import gamesRoutes from "./routes/gamesRoutes.js"

const app = express();

app.use("/api/games", gamesRoutes);

app.listen(5001, () => {
    console.log("Server started on port 5001");
});