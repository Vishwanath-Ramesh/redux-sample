import produce from 'immer';

import {
  GET_POSTS_SUCCESS,
  GET_POSTS_BEGIN,
  GET_POSTS_ERROR,
} from './ActionTypes';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const reducer = produce((draft, action) => {
  // The producer can also accepts a function with draft state and any other parameters needed. Next parameter can be used to initialize the state.
  switch (action.type) {
    case GET_POSTS_BEGIN:
      draft.isLoading = true; // Here we just modify the draft state instead of returning the new updated state.
      return; // We return to restict pass on to next case. If we return 'undefined', produce will return the new state with modified changes in the draft.
    case GET_POSTS_SUCCESS:
      draft.posts = action.payload.posts;
      draft.isLoading = false;
      return;

    case GET_POSTS_ERROR:
      draft.error = action.payload.error;
      draft.isLoading = false;
      return;

    /* It is not necessary to handle the default case, a producer that doesn't do anything will return the original state.
      default:
        return state;*/

    // Note: Switch can also be refactored to if to eliminate additional case & return.
  }
}, initialState);

export default reducer;
