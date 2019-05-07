import {combineReducers} from 'redux';
import productReducer from './product.reducer';
import editReducer from './edit/edit.index';


const rootReducer = combineReducers({
    productReducer,
    editReducer
});

export default rootReducer;