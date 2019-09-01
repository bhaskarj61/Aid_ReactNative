import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'App/src/utils/redux/reducers/rootReducer';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(promise, thunk);

export default createStore(rootReducer, middleware);
