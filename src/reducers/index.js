import productReducer from './product.reducer';
import categoryReducer from './category.reducer';
import { combineReducers } from "redux";
import authReducer from './auth.reducer';
import userReducer from './user.reducer.js';
import cartReducer from './cart.reducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  user: userReducer
})

export default rootReducer;