const COHORT = "2406-ftb-mt-web-pt";
const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

// This function should fetch all players from the api
export async function getAllPlayers() {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.log("Failed to fetch all players!", error);
  }
}

// This function should fetch just one player
export async function getSinglePlayer(id) {
  try {
    const response = await fetch(`${BASE_URL}/players/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Failed to fetch the selected player!", error);
  }
}

// This function should create a player using a name, breed, image and returns that player with an id number
export async function createPlayer(name, breed, imageURL) {
  try {
    const response = await fetch(`${BASE_URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        breed: breed,
        imageURL: imageURL,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Failed to add your new player!", error);
  }
}

// This function should delete a selected player
export async function deletePlayer(id) {
  try {
    const response = await fetch(`${BASE_URL}/players/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Failed to delete player!", error);
  }
}
