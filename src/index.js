import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootSaga from './sagas/sagas'

import { appReducer, artistsReducer, eventsReducer, usersReducer } from './reducers/index'

import { BrowserRouter, Route } from 'react-router-dom'

import './styles/index.css';
import App from './containers/App';

const rootReducer = combineReducers({ app: appReducer, artists: artistsReducer, events: eventsReducer, users: usersReducer })

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <div>
        <Provider store={store} >
            <BrowserRouter>
                <Route path="/" component={App} />
            </BrowserRouter>
        </Provider>
    </div>
    ,
    document.getElementById('root')
);

registerServiceWorker();

