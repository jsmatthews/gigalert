import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { artistsReducer, eventsReducer } from './reducers/index'

import { BrowserRouter } from 'react-router-dom'

import './styles/index.css';
import App from './containers/App';

const rootReducer = combineReducers({artists: artistsReducer, events: eventsReducer})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <div>
        <Provider store={store} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </div>
    ,
    document.getElementById('root')
);

registerServiceWorker();

