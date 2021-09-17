import { createStore } from "redux";
import counterReducer from "../reducer/Counter";

const store = createStore(counterReducer);

export default store;
