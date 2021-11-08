import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter } from 'react-router-dom';

import "./index.css";
import App from "./App";


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
        <BrowserRouter>
                    <App />
        </BrowserRouter>,
    document.getElementById('root'));

reportWebVitals();
