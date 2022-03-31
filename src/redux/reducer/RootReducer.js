import { combineReducers } from "redux";
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';
import CategoryItemReducer from './CategoryItemReducer';
import JensItemReducer from './JensItemReducer';

const rootReducer = combineReducers({
    ProductReducer,
    CartReducer,
    CategoryItemReducer,
    JensItemReducer
})

export default rootReducer;