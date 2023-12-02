import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import LoginReducers from "reducers/LoginReducers";
import history from "histories";
import ProfilReducers from "reducers/ProfilReducers";
import ArtikelReducers from "reducers/ArtikelReducers";
import DashboardReducers from "reducers/DashboardReducers";

const rootReducers = combineReducers({
    router: connectRouter(history),
    login: LoginReducers,
    profil: ProfilReducers,
    berita: ArtikelReducers,
    dashboard: DashboardReducers
})

export default rootReducers