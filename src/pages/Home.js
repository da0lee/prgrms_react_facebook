import React from 'react';
import WirteForm from '../components/card/WirteForm';
import Card from '../components/card/Card';

const Home = ({ user, posts }) => {
  return (
    <>
      <WirteForm placeholder="무슨 생각을 하고 계신가요?" btnText="공유하기" />
      {posts.map((post) => (
        <Card key={post.seq} user={user} placeholder="댓글을 입력하세요..." btnText="댓글달기" post={post} />
      ))}
    </>
  );
};

export default Home;
