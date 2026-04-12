export function getAllGames(req, res) {
    res.status(200).json({message:"Games sent"});
}

export function getStorePage(req, res) {
    res.status(200).json({message:"This is the store page for game with given id"})
}

export function addToFavorites(req, res) {
    res.status(201).json({message:"Game added to favorites"})
}