import axios from 'axios';

import {
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_POSTS_BEGIN,
} from './ActionTypes';

function getPosts() {
  return (dispatch, getState) => {
    dispatch({ type: GET_POSTS_BEGIN });
    axios
      .get('https://www.reddit.com/r/reactjs.json')
      .then((res) =>
        dispatch({
          type: GET_POSTS_SUCCESS,
          payload: { posts: res.data.data.children.map((item) => item.data) },
        })
      )
      .catch((err) =>
        dispatch({ type: GET_POSTS_ERROR, payload: { error: err } })
      );
  };
}

export { getPosts };
