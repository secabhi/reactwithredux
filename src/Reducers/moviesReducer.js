export default function moviesReducers(state = [], action) {
    switch (action.type) {
         case 'CREATE_MOVIES':
               return[...state,Object.assign({},action.movie)]
         default:
               return state
    }
}