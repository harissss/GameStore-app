export async function getGames() {
    const response = await fetch("/api/games/");

    console.log(response.ok);
    if(!response.ok) {
        throw new Error("Failed to fetch games");
    }

    return response.json();
}