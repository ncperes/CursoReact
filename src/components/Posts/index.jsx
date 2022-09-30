import { PostCard } from '../PostCard';
import P from 'prop-types';
import React from 'react';
import './styles.css';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
    ))}
  </div>
);

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      cover: P.string.isRequired,
      title: P.string.isRequired,
      id: P.number.isRequired,
      body: P.string.isRequired,
    }),
  ),
};
