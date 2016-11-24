import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { mainMenuReducer } from './mainmenu-reducer';
// import { counterReducer } from './modules/counter';
// import { starsReducer } from './modules/stars';
// import { IStore } from './IStore';

const { reducer } = require('redux-connect');

// const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
const rootReducer: Redux.Reducer<any> = combineReducers<any>({
  routing: routerReducer,
//   counter: counterReducer,
//   stars: starsReducer,
  mainMenu: mainMenuReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
