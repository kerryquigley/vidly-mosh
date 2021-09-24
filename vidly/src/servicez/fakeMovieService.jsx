
import * as genresAPI from "./fakeGenreService";

const movies = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04.28.809Z",
        liked: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Die Hard",
        genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
        numberInStock: 3,
        dailyRentalRate: 5,
        publishDate: "2018-01-03T19:04.28.809Z",
        liked: false
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Terminator II",
        genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
        numberInStock: 8,
        dailyRentalRate: 2,
        publishDate: "2018-01-03T19:04.28.809Z",
        liked: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd471818",
        title: "Get Out",
        genre: {_id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
        numberInStock: 8,
        dailyRentalRate: 4,
        publishDate: "2017-01-03T19:04.28.809Z",
        liked: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Caddy Shack",
        genre: {_id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
        numberInStock: 4,
        dailyRentalRate: 1,
        publishDate: "2018-01-03T19:04.28.809Z",
        liked: false
    },
    {
        _id: "5b21ca3eeb7f6fbccd471820",
        title: "It's Complicated",
        genre: {_id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
        numberInStock: 7,
        dailyRentalRate: 3,
        publishDate: "2009-01-03T19:04.28.809Z",
        liked: true
    }, 
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "The Departed",
        genre: {_id: "5b21ca3eeb7f6fbccd471812", name: "Drama"},
        numberInStock: 4,
        dailyRentalRate: 1,
        publishDate: "2006-01-03T19:04.28.809Z",
        liked: true
    }

];

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m._id===id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id===movie._id) || {};
    movieInDb.title = movie.title;
    movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    if (!movieInDb._id) {
        movieInDb._id = Date.now().toString();
        movies.push(movieInDb);
    }

    return movieInDb;
}