import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './Reducer';
import { getPosts } from './Actions';

const Store = createStore(reducer, applyMiddleware(thunk));
Store.dispatch(getPosts());

export default Store;
