const express = require('express');
const mongoose = require('mongoose');
const actors = require('./routers/actor');
const movies = require('./routers/movie');
const app = express();
let path = require('path');

app.listen(8080);
app.use("/", express.static(path.join(__dirname, "dist/movieAng")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost:27017/movies', function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');
});
//Configuring Endpoints
//Actor RESTFul endpoints 
app.get('/actors', actors.getAll);
app.post('/actors', actors.createOne);
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.post('/actors/:id/movies', actors.addMovie);
app.post('/actors/:id/:movieId/delete', actors.deleteMovie)
app.delete('/actors/:id', actors.deleteOne);
app.delete('/actors/:id/deletemovies', actors.deleteOneAndMovies);
app.get('/actors/avgmovies/get', actors.avgMovies);

//Movie RESTFul  endpoints
app.get('/movies', movies.getAll);
app.post('/movies', movies.createOne);
app.get('/movies/:id', movies.getOne);
app.put('/movies/:id', movies.updateOne);
app.delete('/movies/:id/deletebyid', movies.deleteById);
app.post('/movies/:id/:actorId/delete', movies.deleteActor);
app.post('/movies/:id/actors', movies.addActor);
app.get('/movies/:year1/:year2', movies.getBetweenYear);


app.delete("/movies/:title/deletebytitle", movies.deleteByTitle);

app.delete('/movies/:year1/:year2', movies.deleteBetweenYear);
