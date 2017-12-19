import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {artistsReducer, eventsReducer} from './reducers/index'

import './index.css';
import App from './App';

const rootReducer = (state = {}, action) => {
    return {
        artists: artistsReducer(state.artists, action),
        events: eventsReducer(state.events, action)
    };
}

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <div>
        <Provider store={store} >
            <App />
        </Provider>
    </div>
    ,
    document.getElementById('root')
);

registerServiceWorker();

