import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Posts extends Component {
  render() {
    const { posts, isLoading, error } = this.props;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <span>{post.score}</span>
            <div>
              <h2>{post.title}</h2>
              <div>{post.num_comments} comments</div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps)(Posts);
