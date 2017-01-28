export default function moviesReducers(state = [], action) {
    switch (action.type) {
         case 'CREATE_MOVIES':
               return[...state,Object.assign({},action.movie)]
         case 'LOAD_MOVIE_SUCCESS':
               //return[...state,Object.assign({},action.movie)]      
               return action.movie;
         default:
               return state
    }
}