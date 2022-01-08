import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './containers/App'
// eslint-disable-next-line
import {Provider, connect} from 'react-redux'
import {createStore, applyMiddleware, combineReducers } from 'redux'
import { searchRobots , requestRobots } from './components/reducer';
import thunkMiddleWare from 'redux-thunk';
import 'tachyons';
import { createLogger } from 'redux-logger';

/* ************************MIDDLEWARE************************* */
const logger = createLogger()
const rootReducers = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleWare,logger))
//Questo modulo si iterpone tra l'azione e il reducer ed analizza il flusso dei dati.
//Questo semplifica il log di ciò che accade lungo il percorso dei dati.
//E possibile installare l'estensione redux DevTools dal Chrome store.

ReactDOM.render(
        <Provider store={store}>
              <App />
        </Provider>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
