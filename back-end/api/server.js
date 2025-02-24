// API significa Application Programming Interface
// POST, GET, PUT, DELET
// CRUD - Creat Read Uptate Delete
// Endpoint

import express from 'express' 
import {artistArray} from "../../front-end/src/assets/database/artists.js"
import {songsArray} from "../../front-end/src/assets/database/songs.js"

const app = express();
const PORT = 3001;

app.get('/', (request, response) =>{
    response.send("Só vamos trabalhar com modelos '/artist' e '/songs'")
})

app.get('/artists', (request, response) =>{
    response.send(artistArray)
});

app.get('/songs', (request, response) =>{
    response.send(songsArray)
});

app.listen(PORT, () => {
    console.log(`Servidor está escutando na pora ${PORT}`)
});