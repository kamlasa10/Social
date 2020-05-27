import {combineReducers, createStore, applyMiddleware, compose } from "redux";
import usersReducer from "./usersReducer";
import dialogsReducer from "./dialogsReducer";
import {reducer as formReducer } from 'redux-form';
import profileReducer from "./profileReducer";
import thunk from 'redux-thunk';
import authReducer from "./authReducer";
import appReducer from "./appReducer";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  users: usersReducer,
  dialogs: dialogsReducer,
  form: formReducer,
  profile: profileReducer,
  auth: authReducer,
  app: appReducer
});

export type RootReducerType = typeof reducers;

export type StateType = ReturnType<RootReducerType>;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store