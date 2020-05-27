import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storage from './redux/store';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
export let rerenderTree = () => {
    ReactDOM.render(
    <BrowserRouter>
        <Provider store={storage}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
    );
};
rerenderTree();


