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