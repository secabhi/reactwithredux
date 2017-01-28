import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../Reducers/root';
import reduxImmutable from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk,reduxImmutable())
    );
}