import movieApi from '../api/mockMovieApi';

export function createMovies(movie){
    return {type:'CREATE_MOVIES',movie};
}

export function movieSuccess(movie){
    return {type:'LOAD_MOVIE_SUCCESS',movie};
}

export function loadMovies(){
    return function(dispatch){
        return movieApi.getAllMovies().then(movies=>{
            dispatch(movieSuccess(movies));
        }).catch(error=>{
            throw(error);
        });
    };
}
