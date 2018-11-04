import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import App from "./app.jsx";
import {addArticle} from "./actions";

const store = createStore(rootReducer);
store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );

render (
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById("root")
);
