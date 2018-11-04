import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppOldExample from './app.jsx';
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { addArticle } from "./actions/index";

const store = createStore(rootReducer);
window.store = store;
console.log(store.getState());
window.addArticle = addArticle;

store.subscribe(() => console.log('SUBSCRIPTION: Look ma, Redux!!'));
store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) );
console.log(store.getState());

/*
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './app.jsx';

const middleware = [thunk];

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

const store = createStore(todos, {
    name: "Müller",
    vorname: "Sascha"
}, applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
        <App
            test='Testausgabe'
        />
    </Provider>,
    document.getElementById('root')
);
*/