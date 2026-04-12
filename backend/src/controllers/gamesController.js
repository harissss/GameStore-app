// This is where the backend functionality is implemented. Everything related to the games is handled here. 
// These functions are invoked from the gamesRoutes.js file. 

// Function to get all the available games from the database, so that it can be shown in the UI. 
export function getAllGames(req, res) {
    res.status(200).json({message:"Games sent"});
}

// Function to show the store page of a specific game, when the user clicks on the game. 
export function getStorePage(req, res) {
    res.status(200).json({message:"This is the store page for game with given id"})
}

// Function to add a game to a user's "favorites list". This happens when the user clicks the "like" button on a game. 
export function addToFavorites(req, res) {
    res.status(201).json({message:"Game added to favorites"})
}