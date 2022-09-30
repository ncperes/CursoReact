import './styles.css';
import React from 'react';
import P from 'prop-types';

export const PostCard = (post) => {
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div className="post-content">
        <h2>
          ID:{post.id}
          <br />
          {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  cover: P.string.isRequired,
  title: P.string.isRequired,
  id: P.number.isRequired,
  body: P.string.isRequired,
};
