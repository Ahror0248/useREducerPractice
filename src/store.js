import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./reducer/userReducer";
import productReducer from "./reducer/productReducer";
import logger from "redux-logger";


 const store = createStore(
    combineReducers({ userReducer, productReducer }),
    applyMiddleware(logger)
  );

  export default store