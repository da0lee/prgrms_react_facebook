# 구체적 폴더 명 안에 index.js로 개별 component 관리

<br/>

# Navigation

> components > Navigation > index.js

- map으로 돌리지 않고 <NaviItem/> 에 to, text, show(보일지 여부), action을 props로 전달.

```js
const Navigation = ({ user, onLogout }) => {
  return (
    <nav className="navbar fixed-top bg-blue">
      <Logo />
      <ul className="nav">
        <NaviItem to="/login" text="로그인" show={!user} />
        <NaviItem to="/signup" text="회원가입" show={!user} />
        <Profile show={user} user={user} />
        <NaviItem to="/signout" action={onLogout} text="로그아웃" show={user} />
      </ul>

      <style jsx>{`
        .fixed-top {
          height: 50px;
        }
        .bg-blue {
          background-color: #3b5999;
        }
        /* ".nav" 임이의 prefix가 추가되지만 ".nav-item .nav-link"은 추가되지 않습니다. 
          자식 컴포넌트에 스타일을 적용할 수 있습니다. */
        .nav :global(.nav-item .nav-link) {
          color: white;
          font-weight: 800;
          font-size: 12px;
          cursor: pointer;
          line-height: 26px;
        }
        .nav :global(.nav-item .nav-link:hover) {
          color: rgba(255, 255, 255, 0.75);
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
```

<br/>

> hocs > toggle.js

# HOC : toggle

https://velog.io/@hwang-eunji/React-%EA%B3%A0%EC%B0%A8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-HOC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

https://velopert.com/3537

<br/>

HOC는

1. 리액트 컴포넌트를 파라미터로 받아서
2. 함수 내부에서 새 컴포넌트를 만든 다음
3. 해당 컴포넌트 안에서 파라미터로 받아온 컴포넌트를 렌더링 하여
4. 다른 리액트 컴포넌트를 반환하는 고차함수다.

함수를 통하여 컴포넌트에 우리가 준비한 특정 기능을 부여하고 싶을 때 쓰인다. (주로 인증 체크)

```
[ 인증체크 ]

아무나 진입 가능한 페이지, 로그인 한 회원만 진입 가능한 페이지,로그인 한 회원은 진입하지 못하는 페이지, 관리자만 진입 가능한 페이지 등을 컨트롤.
```

ex) REDUX - connect() / ROUTER - withRouter()

<br/>

```js
import React from 'react';

function toggle(WrappedComponent) {
  return function ToggleWrapped(props) {
    return props.show ? <WrappedComponent {...props} /> : false;
  };
}

export default toggle;
```

```js
import toggle from '@/hocs/toggle';

export default toggle(NaviItem);
export default toggle(Profile);
```

여기서는 NaviItem, Profile 함수를 감싸주었다.

<br/>

> pages > Home > Post.js

depth가 깊게 들어갈 때 1번처럼만 정의 가능한 줄 알았는데, 2번 처럼도 가능하다!

### 1번

```js
const { writer } = post;
const { name } = writer;
```

<br/>

### 2번

```js
const {
  writer: { name },
} = post;
```

<br/>

# App

- App에서 user, post state 관리
- handleLogOut() : user state undefined로

- handleAddComment()

map도 좋지만, 이렇게 새 포스트를 복사하고 해당 포스트를 찾아서 바뀔 부분만 처리할 수도 있다.

```js
// post seq랑 작성내용 넣어서
handleAddComment = (postSeq, contents) => {
  // newPosts는 posts 원본 배열의 복사
  const newPosts = [...this.state.posts];
  const idx = newPosts.findIndex((v) => v.seq === postSeq);
  // post는 posts 원본 배열의 복사 중 event가 일어난 idx와 같은 idx의 item
  const post = newPosts[idx];
  post.commentList = [
    {
      // seq는 commentList의 현재 길이와 동일
      seq: post.commentList.length,
      createAt: new Date(),
      // state의 user
      writer: this.state.user,
      contents,
    },
    // 새 post 먼저 넣고 코멘트 원본 나중에 추가하기 위해 새 코멘트 밑에 원본 배열 위치시킴
    ...post.commentList,
  ];
  // posts newPosts로 변경
  this.setState({
    posts: newPosts,
  });
};
```

- handleAddPost()

```js
handleAddPost = (contents) => {
  // 작성 내용 넣었을 때
  this.setState({
    posts: [
      {
        // seq: post의 길이
        seq: this.state.posts.length,
        writer: this.state.user,
        contents,
        createAt: new Date(),
        likes: 0,
        comments: 0,
        likesOfMe: false,
        commentList: [],
      },
      ...this.state.posts,
    ],
  });
};
```

- handleLikePost

```js
// 해당 포스트 번호 넣고
handleLikePost = (postSeq) => {
  // newPosts는 posts 배열의 복사본
  const newPosts = this.state.posts.splice(0);
  const idx = newPosts.findIndex((v) => v.seq === postSeq);
  const post = newPosts[idx];
  post.likesOfMe === false ? (post.likes += 1) : (post.likes -= 1);
  post.likesOfMe = !post.likesOfMe;
  this.setState({
    posts: newPosts,
  });
};
```

# DefaultLayout

...rest

```js
class DefaultLayout extends Component {
  render() {
    const { component: Component, user, logOut, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <>
            <Navigation user={user} onLogout={logOut} />
            // 나머지 {...rest로 전달}
            <Component {...matchProps} {...rest} />
            <style jsx global>{`
              .container {
                padding: 0;
                margin: 0 auto;
              }
            `}</style>
          </>
        )}
      />
    );
  }
}
```

# Navigation

```js
<ul className="nav">
  // props show에 user정보를 전달해서 해당 naviItem을 보여줄지 말지를 판단한다. (Hoc에서 관리)
  <NaviItem to="/login" text="로그인" show={!user} />
  <NaviItem to="/signup" text="회원가입" show={!user} />
  <Profile show={user} user={user} />
  <NaviItem to="/signout" action={onLogout} text="로그아웃" show={user} />
</ul>
```

# NaviItem

```js
const NaviItem = ({ to, text, action }) => {
  const onClickAnchor = (e) => {
    // 각 <NaviItem/> 중 로그아웃 아이템에만 action={onLogout} 가 전달되었기 때문에 if(action)으로 분기 처리를 해준다.
    if (action) {
      e.preventDefault();
      e.stopPropagation();
      // 현재 초기 설정이 user에 harry라는 사용자 정보가 있는 상태이기 때문에 navItem을 클릭하면 user의 정보가 undefined로 설정되는 logOut함수가 실행된다.
      action();
    }
  };

  return (
    <li className="nav-item">
      <a href={to} onClick={onClickAnchor} className="nav-link">
        {text}
      </a>
    </li>
  );
};

// Hoc로 NaviItem 감싼다.
export default toggle(NaviItem);
```

# Hoc

```js
// 함수에 react component 전달
function toggle(WrappedComponent) {
  // <Navigation/>에서 <NaviItem/>로 전달했던 props 전달
  return function ToggleWrapped(props) {
    // show props가 true면 props를 그대로 전달하여 보여주고, 아니면 보여주지 않는다.
    // 내가 <NaviItem/>와 <Propfile/>을 Hoc으로 감쌌으므로 여기서 <WrappedComponent/>는 각각 <NaviItem/>와 <Propfile/>다.
    return props.show ? <WrappedComponent {...props} /> : false;
  };
}
```

# Post

```js
// 좋아요 버튼 누르면 onLikeClicked()에 post.seq 전달
const handleClickLikeButton = (e) => {
  e.preventDefault();
  onLikeClicked(post.seq);
};
```

# PostForm

```js
// contents state 관리
state = {
  contents: '',
};

handleFormSubmit = (e) => {
  // Q const { onPostSubmit } = this.props; 해봐도 똑같이 동작
  const { onPostSubmit = () => {} } = this.props;
  const { contents } = this.state;
  e.preventDefault();
  onPostSubmit(contents);
  this.setState({
    contents: '',
  });
};

// PostForm, CommentForm 둘 다 거의 같고 minHeight, lineHeight , placeholder 만 다르므로 따로 정의하여 props로 내려준다.
const { minHeight = 100, lineHeight = 20, placeholder = '무슨 생각을 하고 계신가요?' } = this.props;

<form className="write-form" onSubmit={this.handleFormSubmit}>
  <textarea
    className="form-control input-lg"
    placeholder={placeholder}
    spellCheck="false"
    value={contents}
    onChange={this.handelFormChange}
  />

  // disabled : disabled 속성이 명시된 <input> 요소는 사용할 수 없으며, 사용자가 클릭할 수도 없다.
  // 특정 조건이 충족될 때까지 사용자가 입력 필드를 클릭할 수 없도록 설정하고, 특정 조건이 충족되면 자바스크립트 등으로 disabled 속성값을 삭제하여 사용자가 입력 필드를 다시 사용할 수 있도록 조절할 수 있다.
  // 양쪽 공백을 제외한 contents의 length가 존재하면 disabled 해제
  <button type="submit" className="btn btn-primary" disabled={!contents.trim().length}>
    공유하기
  </button>
</form>;
```

# CommentList

```js
const CommentList = (props) => {
  // Q 구조 분해 할당 하면서 초깃값 설정?
  // A 구조 분해하며, 만약 undefined인 경우 할당 오퍼레이터(=)의 value로 초기화가 된다.
  const { commentList = [] } = props;

  return (
    <ul className="comment-list">
      {commentList.map((comment) => (
        <Comment key={comment.seq} comment={comment} />
      ))}
      <style jsx global>{`
        ul.comment-list {
          padding: 0;
          list-style: none;
        }
      `}</style>
    </ul>
  );
};
```

# CommentForm

```js
state로 contents관리
state = {
  contents: '',
};

handleSubmit = (e) => {
  // Q const { postSeq, onCommentSubmit } = this.props; 과 동일
  // A 구조 분해하며, 만약 undefined인 경우 할당 오퍼레이터(=)의 value로 초기화가 된다.
  const { postSeq, onCommentSubmit = () => {} } = this.props;
  e.preventDefault();
  onCommentSubmit(postSeq, this.state.contents);
  this.setState({ contents: '' });
};
```

<br/>
<hr/>
<br/>

# LocalStorage에서 data 불러와 posts state 변경하기

# Setter

> utils > postMockStore.js

https://poiemaweb.com/es6-class  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/set

### set 문법

{set prop(val) { ... } }

### 파라미터

prop : 프로퍼티를 가져올 함수 이름

setter는 클래스 필드에 값을 할당할 때마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용한다.
( = 프로퍼티 값이 변경되어 질 때마다 함수를 실행하는데 사용)

setter는 메소드 이름 앞에 set 키워드를 사용해 정의한다. 이때 메소드 이름은 클래스 필드 이름처럼 사용된다. 다시 말해 setter는 호출하는 것이 아니라 프로퍼티처럼 값을 할당하는 형식으로 사용하며 할당 시에 메소드가 호출된다.

```js
// localStorage에 data 요청하는 부분 import
import { getLocalStorageData } from './utils';

// key import
import { USER_POSTS_KEY } from './data';

export default class PostMockStore {
  // posts state 설정. 초기값은 빈 배열
  constructor() {
    this.posts = [];
  }

  // setPosts : 프로퍼티를 가져올 함수 이름
  set setPosts(newPosts) {
    try {
      // newPosts가 array 형태가 아니면 에러 던짐
      if (!Array.isArray(newPosts)) {
        throw new Error(`invalid Value`);
      }

      // newPosts가 array 형태가 맞으면 newPost 로 할당
      this.posts = newPosts;

      // err 가 발생하면 해당 err 표시
    } catch (err) {
      console.log(`Cannot set posts value..${err}`);
    }
  }
  // localStorage로부터 data 가져오는 로직
  getPostFromLS = () => {
    this.posts = getLocalStorageData(USER_POSTS_KEY);
    // 할당 후 this.posts; 반환
    return this.posts;
  };
}
```

<br/>

> App.js

# 포스트 작성

```js
// 작성 내용 넣고
addPostsContent = (contents) => {
  //  새로운 포스트 양식 작성
  const newPost = {
    // seq: posts 길이만큼
    seq: this.state.posts.length,
    writer: {
      //  작성자 정보 = user 정보
      seq: this.state.user.seq,
      name: this.state.user.name,
      profileImageUrl: this.state.user.profileImageUrl,
    },
    likes: 0,
    likesOfMe: false,
    contents,
    comments: 0,
    commentList: [],
  };
  // newPost, posts 원배열 복사
  //
  this.setState(
    {
      posts: [...this.state.posts, newPost],
    },
    // localStorage에 key, posts 전달
    () => {
      setLocalStorageData(USER_POSTS_KEY, this.state.posts);
    }
  );
};
```

<br/>

# 코멘트 작성

https://www.reddit.com/r/reactjs/comments/7k3xw4/setstate_with_and_without_arrow_function/

1. 상태 값을 명시 적 값으로 설정할 때

```js
this.setState({
  active: false,
});
```

<br/>

2.

- 이전 상태를 기반으로 상태를 업데이트해야하는 경우 이 상태가 오래되었을 수 있으므로 this.state에서 직접 읽는 대신 함수를 사용해야 한다.

- 이전 값에 의존하는 방식으로 상태 값을 설정할 때 사용한다 (예 : 부울 토글, 숫자 증가).

```js
this.setState((prevState) => ({
  quantity: prevState.quantity + 1,
}));
```

```js
addComment = (seq, content) => {
  this.setState(
    // state : prevState. 함수형 업데이트
    (state) => ({
      // posts에서 map 돌려서 넘어온 seq와 같은 seq의 post면 코멘트 업데이트. 아니면 기존 post return
      posts: state.posts.map((post) => {
        if (post.seq === seq) {
          const comment = {
            seq: post.commentList.length,
            writer: {
              // Q user.seq가 되야하지 않을까
              seq: post.commentList.length,
              name: state.user.name,
            },
            content,
          };
          return {
            ...post,
            commentList: [...post.commentList, comment],
            comments: post.commentList.length + 1,
          };
        }
        return post;
      }),
    }),
    // setState의 두번째 파라미터로 콜백함수를 등록하면, this.setState의 작업이 끝난 후 콜백 함수를 실행한다.
    // localStorage에 바로 해당 내용 저장
    // 함수형에서는 useEffect로 처리할 수 있다.
    // Q componentDidmout()로 처리하면 안되나?
    () => {
      setLocalStorageData(USER_POSTS_KEY, this.state.posts);
    }
  );
};
```

# 좋아요

```js
// 이벤트 발생한 postSeq 전달
handleLikePost = (postSeq) => {
  // newPosts는 기존 posts의 복사
  const newPosts = this.state.posts.concat();

  // 기존 배열 복사본 중 이벤트 발생한 postSeq와 같은 seq의 index를 찾아 idx에 할당.
  const idx = newPosts.findIndex((v) => v.seq === postSeq);

  // 기존배열 복사본[이벤트일어난 곳과 동일한 idx]가 state가 바뀔 해당 post
  const post = newPosts[idx];
  if (post.likesOfMe) {
    post.likes -= 1;
  } else {
    post.likes += 1;
  }
  post.likesOfMe = !post.likesOfMe;
  this.setState(
    {
      // posts state를 newPosts로 변경
      posts: newPosts,
    },
    // 그리고 바로 localStorage에 해당 데이터를 저장한다.
    () => {
      setLocalStorageData(USER_POSTS_KEY, this.state.posts);
    }
  );
};
```

# Uncaught ReferenceError: regeneratorRuntime is not defined

https://programmingsummaries.tistory.com/401

Babel은 ES2015+ 문법을 ES5 지원 Browser에서 해석할 수 있도록 변환해주는 트랜스파일러다. 하지만 새롭게 추가된 전역객체들 (지금 여기서는 Axios)는 트랜스파일링 만으로는 해결하기 어렵기 때문에 core-s나 regenerator-rnuntime과 같은 별도의 polyfill이 필요하다.

설치 후 babelrc 수정

> .babelrc

```js
{
  "presets": ["@babel/preset-react", "@babel/preset-env"],
  "plugins": [
    ["styled-jsx/babel", { "optimizeForSpeed": true, "vendorPrefixes": true, "sourceMaps": false }],
    "@babel/plugin-transform-runtime",
    [
      "module-resolver",
      {
        "root": ["./src"]
      }
    ]
  ]
}
```

### yarn add -D yarn babel-plugin-transform-runtime

<br/>

# token

Signin등으로 token이 생성되면 loacalStorage에 저장하여 관리한다.

https://stackoverflow.com/questions/45578844/how-to-set-header-and-options-in-axios

https://velog.io/@cada/%ED%86%A0%EA%B7%BC-%EA%B8%B0%EB%B0%98-%EC%9D%B8%EC%A6%9D%EC%97%90%EC%84%9C-bearer%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C
