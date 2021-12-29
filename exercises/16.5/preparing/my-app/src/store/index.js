// src/store/index.js
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';
const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer);

// store.subscribe(() => {
//   console.log(store.getState())
// })

export default store;