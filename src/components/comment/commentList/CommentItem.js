import React from 'react';
import css from 'styled-jsx/css';

const CommentItem = ({ comment }) => {
  const { writer, createAt, contents } = comment;
  const { name } = writer;

  const ElapsedTime = () => {
    const now = new Date();
    const timeValue = new Date(createAt);

    const betweenTime = Math.floor((now.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금 전';
    if (betweenTime < 60) {
      return `${betweenTime}분 전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년 전`;
  };

  return (
    <>
      <li className="comment">
        <div className="comment-info">
          <h6 className="comment-writer">{name}</h6>
          <div className="comment-datetime">{ElapsedTime()}</div>
        </div>
        <p className="comment-text">{contents}</p>
      </li>
      <style jsx>{StyledCommentItem}</style>
    </>
  );
};

const StyledCommentItem = css`
  li.comment {
    padding: 20px 40px 24px;
    border-bottom: 1px solid #e6ecf5;
    background-color: #fafbfd;
    position: relative;
  }
  li.comment:first-child {
    border-top: 1px solid #e6ecf5;
  }
  li.comment .comment-text {
    padding-top: 20px;
  }
`;
export default CommentItem;
