import {createStore} from "redux";
import BookReducer from "./BookReducer";

// A store holds the application state
const store = createStore(BookReducer)

export default store;