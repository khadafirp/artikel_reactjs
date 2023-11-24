/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import Login from "views/Login.js"

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "assets/css/login.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import { Provider } from "react-redux";
import stores from "stores";
import history from "histories";
import { HistoryRouter as Router } from 'redux-first-history/rr6'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <Provider store={stores}>
    <Router history={history}>
      <ThemeContextWrapper>
        <BackgroundColorWrapper>
          <Routes>
            <Route path="/admin/login-page" exact element={<Login />} />
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/rtl/*" element={<RTLLayout />} />
          </Routes>
        </BackgroundColorWrapper>
      </ThemeContextWrapper>
    </Router>
  </Provider>
);
