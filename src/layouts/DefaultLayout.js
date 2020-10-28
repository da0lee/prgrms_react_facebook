import React, { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { get, set } from '../service/postService';
import apis from '../service/apis/index';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, user, setUser }) => {
  const [posts, setPosts] = useState(get());
  const history = useHistory();

  useEffect(() => {
    set(posts);
  }, [posts]);

  // 로그아웃
  const handleLogOut = async () => {
    setUser(null);
    try {
      const result = await apis.usersApi.getMyInfo();
      history.push('/login');
      return result;
    } catch (error) {
      alert(error.message);
    }
  };

  // 무한 스크롤링

  const [target, setTarget] = useState(null);

  const _fetchProductItems = () => {
    const productItems = apiProductItems(itemLength);

    if (!productItems.length) {
      actions.isLoaded(dispatch)(false);
      return;
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(_onIntersect, { threshold: 1 });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [target]);

  const _onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      _fetchProductItems();
    }
  };

  return (
    <Route
      render={(matchProps) => (
        <>
          <Header user={user} onLogOut={handleLogOut} />
          <div className="posts container">
            <Component {...matchProps} posts={posts} setPosts={setPosts} user={user} />
            {/* {state.isLoaded && <div ref={setTarget}>loading</div>} */}
          </div>

          <style jsx global>
            {`
              .container {
                max-width: 600px;
              }
            `}
          </style>
        </>
      )}
    />
  );
};

export default DefaultLayout;
