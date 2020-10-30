import React, { useRef, useEffect } from 'react';
import css from 'styled-jsx/css';
import CommentList from '../comment/commentList/CommentList';
import PostBody from './postBody/PostBody';
import CommentForm from '../comment/CommentForm/CommentForm';

const Post = ({ post, index, onAddComment, onLikePost }) => {
  const { commentList } = post;
  const postRef = useRef(null);

  //  무한 스크롤링

  // useEffect(() => {
  //   if (index >= 5) {
  //     const observer = new IntersectionObserver(
  //       (entries, observer) => {
  //         if (entries[0].isIntersecting) {
  //           observer.unobserve(entries[0].target);
  //           entries[0].target.src = entries[0].target.dataset.src;
  //         }
  //       },
  //       { threshold: 0 }
  //     );
  //     observer.observe(postRef.current);
  //   }
  // }, []);

  return (
    <>
      <div className="card">
        <PostBody post={post} onLikePost={onLikePost} />
        <CommentList commentList={commentList} />
        <CommentForm seq={post.seq} onAddComment={onAddComment} />
      </div>
      <style jsx>{StyledPost}</style>
    </>
  );
};

const StyledPost = css`
  .card {
    padding: 0;
    margin-top: 50px;
    border: none;
    border-radius: 0.5rem;
  }
`;

export default Post;
