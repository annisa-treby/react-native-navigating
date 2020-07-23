import Client from "../../../shared/httpclient/Client";

export async function getGenres() {
    try {
        const genres = await Client.get("/genre/genres");
        return genres.content
    } catch (e) {
        console.log("GET GENRES " + e)
    }

}

export async function postGenres(form) {
try {
    const genre = await Client.post("/genre");
    return genre.content
} catch (e) {
    console.log("POST GENRE "+e)
}
}

export async function updateGenre(form) {
try {
    const genre = await  Client.put("/genre")
    return genre.content
} catch (e) {
    console.log("PUT GENRE " + e)
}
}

export async function deleteGenre(id) {
try {
    const response = await Client.delete(`/genre/${id}`)
    if (response.status == 200) return true
    else return false
}
catch (e) {
    console.log("DELETE GENRE "+e)
}
}
