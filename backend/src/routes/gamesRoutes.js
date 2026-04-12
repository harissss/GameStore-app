import express from "express";
import { getAllGames, getStorePage, addToFavorites } from "../controllers/gamesController.js";

const router = express.Router();

router.get("/", getAllGames)

router.get("/:id", getStorePage)

router.put("/:id", addToFavorites)

export default router;