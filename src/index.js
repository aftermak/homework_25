import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import logger from 'redux-logger'

import './styles/index.scss';
import App from './App.jsx';
import {rootReducer} from "./components/Redux/rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger )))

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);