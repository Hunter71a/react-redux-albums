import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import Routes from "./routes";

import reducers from "./store/reducers";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
    <BhxBrowser>
        <Routes/>
    </BhxBrowser>
</Provider>, document.getElementById("root"));
