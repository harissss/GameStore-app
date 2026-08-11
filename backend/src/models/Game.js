import mongoose from "mongoose";

// Define the schema for a Game in the database
const gameSchema = new mongoose.Schema({
    //id?
    title: {
        type: String, 
        required: true,
    },
    //picture(s)?
    description: {
        type: String, 
        required: true,
    },
    tags: {
        type: [String], //important note: all tags should be in lower-case, since they are handled as such throughout the code
        required: true,
    },
    price: {
        type: Number, 
        required: true,
    }, 
    release_date: {
        type: Date, 
        required: true,
    },
}, {timestamps: true}, // automatically makes createdAt, updatedAt
);

const Game = mongoose.model("Game", gameSchema);

export default Game;