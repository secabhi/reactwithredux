import delay from './apiDelay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const movies = [
  {
    id: "KKHH",
    title: "Kuch kuch hota hai",
    watchHref: "https://www.youtube.com/watch?v=4cJvmGWfDk4",
    directorId: "karan-johar",
    length: "3:08",
    category: "UA"
  },
  {
    id: "Rock-on",
    title: "Rock On",
    watchHref: "https://www.youtube.com/watch?v=LvfQgYZYQBE",
    directorId: "farhan-akhtar",
    length: "3:10",
    category: "U"
  },
  {
    id: "highway",
    title: "Highway",
    watchHref: "https://www.youtube.com/watch?v=gGbVUVYJiu0",
    directorId: "imtiaz-ali",
    length: "2:52",
    category: "UA"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (movie) => {
  return replaceAll(movie.title, ' ', '-');
};

class MoviesApi {
  static getAllMovies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], movies));
      }, delay);
    });
  }

  static saveMovies(movie) {
    movie = Object.assign({}, movie); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minMoviesTitleLength = 1;
        if (movie.title.length < minMoviesTitleLength) {
          reject(`Title must be at least ${minMoviesTitleLength} characters.`);
        }

        if (movie.id) {
          const existingMoviesIndex = movies.findIndex(a => a.id == movie.id);
          movies.splice(existingMoviesIndex, 1, movie);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new movies in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          movie.id = generateId(movie);
          movie.watchHref = `http://www.pluralsight.com/movies/${movie.id}`;
          movies.push(movie);
        }

        resolve(movie);
      }, delay);
    });
  }

  static deleteMovies(movieId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfMoviesToDelete = movies.findIndex(movie => {
          movie.id == movieId;
        });
        movies.splice(indexOfMoviesToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default MoviesApi;