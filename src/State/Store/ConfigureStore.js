import { createStore, combineReducers } from "redux";
import UserListReducer from "../Reducer/UserListReducer";


export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        UserListReducer
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}