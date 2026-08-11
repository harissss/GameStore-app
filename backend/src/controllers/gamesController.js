import Game from "../models/Game.js";

// This is where the backend functionality is implemented. Everything related to the games is handled here. 
// These functions are invoked from the gamesRoutes.js file. 

// Function to get all the available games from the database, so that it can be shown in the UI. 
// Async because there will be a Promise we have to await. 
export async function getAllGames(req, res) {
    // Steps: 
    // - Retrieve all games from the MongoDB
    // - Encode them all as JSON (i think already done?)
    // - Send them in the response
    // - Set status to 200 (request succeeded)
    // - Handel potential errors, and send relevant error codes


    //res.status(200).json({message:"Games sent"});

    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (err) {
        //status code 500: internal server error
        console.error("Error in getAllGames controller:", err);
        res.status(500).json({message:"Could not fetch games from the database."});
    }
}

// Function to show the store page of a specific game, when the user clicks on the game. 
export function getStorePage(req, res) {
    // Steps: 
    // - Get the id somehow
    // - Query the MongoDB for the specific game, and relevant information for the store page
    // - Encode as JSON 
    // - Send response with status 200 
    // - Handel errors and send relevant error codes

    let id = req.params.id;

    res.status(200).json({message:`This is the store page for game with id: ${id}`});
}

// Function to add a game to a user's "favorites list". This happens when the user clicks the "like" button on a game. 
export function addToFavorites(req, res) {
    // Steps: 
    // - Get id of game
    // - Get id of user 
    // - Add it to the list of the user's favorites
    // - Send response with status 200/201 (idk which is better)
    // - Should anything be sent in the JSON response?
    // - Handle errors and send relevant error codes 

    let id = req.params.id;

    res.status(201).json({message:`Game (id: ${id}) added to favorites`});
}

export async function searchGames(req, res) {
    // Notes: 
    // The client can send something like "GET /search?terms=halo&genre=action"
    // Then req.query will have the two fields: terms, genre. 
    // These can be accessed as shown below
    let terms = req.query.terms;
    let genres = req.query.genres;

    //res.status(200).json({message:`Games matching search query: _${terms}_ with genres: _${genres}_ sent`});

    try {
        const filter = {}

        if (terms) {
            filter.title = {$regex: terms, $options: "i"}
        }

        //const genres = genres.map(tag => {tag.toLowerCase()});

        if (genres) {
            let lCaseGenres = genres.split(" ").map(tag => tag.toLowerCase());
            filter.tags = {$all: lCaseGenres}
        }

        const matchingGames = await Game.find(filter);

        // HANDLE 404 NOT FOUND STUFF?
        res.status(200).json(matchingGames);
    } catch (err) {
        //status code 500: internal server error
        console.error("Error in searchGames controller:", err);
        res.status(500).json({message:"Could not fetch games from the database."});
    }    
}

export async function createGame(req, res) {
    try {
        const game = new Game({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags.map(tag => tag.toLowerCase()),
            price: req.body.price,
            release_date: req.body.release_date
        }); // can just be const game = Game.create(req.body);

        const savedGame = await game.save();

        res.status(201).json(savedGame);

    } catch (err) {
        console.error("Error in createGame controller:", err);

        res.status(500).json({
            message: "Could not create game."
        });
    }
}