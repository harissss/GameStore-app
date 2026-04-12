import express from "express";
import { getAllGames, getStorePage, addToFavorites } from "../controllers/gamesController.js";

// Make a router, using express js 
const router = express.Router();

// Create all the routes. 
// All the routes will call a function, where logic is implemented
router.get("/", getAllGames)
router.get("/:id", getStorePage)
router.put("/:id", addToFavorites)

export default router;