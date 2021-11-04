import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from "./components/ScrollToTop"
import store from './app/store';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { GOOGLE_RECAPTCHA_CLIENT_SIDE } from "./api/env"


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <GoogleReCaptchaProvider
                    reCaptchaKey={GOOGLE_RECAPTCHA_CLIENT_SIDE}
                >
                    <App />
                </GoogleReCaptchaProvider>
            </ScrollToTop>
        </BrowserRouter>
    </Provider >,
    document.getElementById('root'));

reportWebVitals();
