import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from "roots";
import history from "histories";

const middleware = [thunk, routerMiddleware(history)];

const stores = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default stores