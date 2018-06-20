import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';
import './style/style.css';

function saveToLocalStorage(state) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (e) {
		console.log(e);
	}
}

function loadFromLocalStorage() {
	try {
		const serializedState = localStorage.getItem('state');
		if(serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch(e) {
		console.log(e);
		return undefined;
	}
}

const persistedState = loadFromLocalStorage();
const store = createStore(
	reducers,
	persistedState
);

store.subscribe(()=>{
	saveToLocalStorage(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#root'));
