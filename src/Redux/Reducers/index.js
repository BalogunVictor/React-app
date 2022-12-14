import { combineReducers } from "redux";
import { productsReducer, selectedProduct} from "./productsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProduct,
});

export default reducers;