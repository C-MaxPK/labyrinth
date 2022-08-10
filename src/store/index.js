import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from "./PlayingField/reducer";

// composeWithDevTools - devTools for Redux in Chrome
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
