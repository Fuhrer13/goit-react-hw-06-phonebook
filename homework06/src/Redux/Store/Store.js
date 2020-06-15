import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "../Reducers/RootReducer";

const store = createStore(rootReducer, devToolsEnhancer());
export default store;
