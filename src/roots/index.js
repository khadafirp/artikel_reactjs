import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import LoginReducers from "reducers/LoginReducers";
import history from "histories";

const rootReducers = combineReducers({
    router: connectRouter(history),
    login: LoginReducers
})

export default rootReducers