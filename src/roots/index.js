import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import LoginReducers from "reducers/LoginReducers";
import history from "histories";
import ProfilReducers from "reducers/ProfilReducers";
import ArtikelReducers from "reducers/ArtikelReducers";

const rootReducers = combineReducers({
    router: connectRouter(history),
    login: LoginReducers,
    profil: ProfilReducers,
    berita: ArtikelReducers
})

export default rootReducers