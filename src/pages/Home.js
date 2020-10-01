import React from 'react';
import WirteForm from '../components/form/writeForm/WirteForm';
import Card from '../components/card/Card';

const Home = ({ posts }) => {
  return (
    <>
      <WirteForm className="form-control input-lg" placeholder="무슨 생각을 하고 계신가요?" btnText={'공유하기'} />
      <Card className="comment-form" placeholder="댓글을 입력하세요..." btnText="댓글달기" posts={posts} />
    </>
  );
};

export default Home;
