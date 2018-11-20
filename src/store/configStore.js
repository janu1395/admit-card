
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import root from '../reducer/RootReducer';

export default function configStore() {
    return createStore(
        root,
        applyMiddleware(thunk)
    );
}