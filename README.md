# 1주차 미션

혼자 수정을 반복하다 길을 잃었습니다 😃  
완성본으로 올리려다 소중한 리뷰를 한 번도 못받을 것 같아 지금까지 작성한 코드 먼저 올립니다. 이건 당연한건데! 싶은 부분도 중학생 조카한테 알려주신다는 마음으로 한 번 더 풀어서 리뷰를 달아주시면 도움이 많이 될 것 같습니다!

## 수행리스트

- [x] 라우터쪼개기
  - [x] DefaultLayout 적용하기
  - [x] PublicLayout 적용하기
- [x] css-in-jsx 적용하기
- [x] Post
  - [x] Post등록기능
  - [ ] Post조회기능
- [ ] 댓글
  - [ ] 댓글등록기능
  - [ ] 댓글조회기능
- [ ] 좋아요 처리하기
- [ ] User
  - [ ] 회원가입
  - [ ] 로그인
  - [ ] 로그아웃

## 고민한 것

### 1. 가장 작다고 생각되는 단위까지 component 나누기

- post form과 comment form에서 textarea, 제출 button이 className만 다르고 기능은 같기에 작은 component로 분리해놓고 나중에 className만 props로 넘겨주면 되겠다! 해서 나눴는데, 각각 포스트form 안에 있을 땐 포스트 수정내용을 받아오고, 코멘트form 안에서는 코멘트 내용만 받아오게 하는 것에서 막혀 다시 각각 다른 컴포넌트로 분리하였습니다.
- navItem에서는 api 폴더의 NavInfo.json을 받아와서 각 li로 뿌려주고 있는데, 이렇게 했더니 user의 이미지가 뜨지 않게 됐습니다.

### 2. Style jsx

- 그냥 적용하면 style이 적용되지 않아 거의 :global을 써서 style을 적용시켰는데, 이렇게 하는게 아니겠다 라는건 본능적으로 느끼고 있습니다..하하

- style을 최대한 layout부분에 몰아줘야하는지, 가장 하위 component까지 세밀하기 나눠 적용해아 하는지도 고민이 됩니다.

### 3. 기능

#### 3-1 포스트 작성 (Localstorage)

api 폴더에 Posts.json파일을 만들어 포스트 추가 기능을 구현하는 것은 todo list 만들 때 해본적이 있어 json으로 먼저 해보고 그 후에 Localstorage를 적용! 하려고 했지만 성공하지 못했습니다.

```js
// Post 작성
const [posts, setPosts] = useState([]);
const nextSeq = useRef(posts.length + 1);
const createAt = new Date().toString();

const onInsertPost = useCallback(
  (contents) => {
    const { seq, name } = user[0];
    const post = {
      seq: nextSeq.current,
      writer: {
        seq,
        name,
      },
      contents,
      createAt: createAt,
      likes: 0,
      comments: 0,
      likesOfMe: false,
      commentList: [],
    };

    setPosts(posts.concat(post));
    nextSeq.current += 1;
    // Q localStorage 해결 못함
    if (posts) {
      localStorage.setItem(name, JSON.stringify(posts));
    }
    const getPost = JSON.parse(localStorage.getItem(name));
    // console.log(getPost);
    // setPosts(getPost);
  },
  [posts]
);
```

<br/>

수정 내용을

```js
setPosts(posts.concat(post));
```

로 업데이트 해주고,

<br/>

```js
nextSeq.current += 1;
```

로 새 고유번호를 주고,

user 네임을 key, 추가된 post 내용을 value로 하여 setItem하고,
getItem으로 다시 받아오면 되겠다 했는데, 그럼 setPosts를 두 번 쓰게되어 그런지 계속 빈 포스트가 작성이 됩니다.

<br/>

#### 3-2 코멘트 작성

머릿속으로는 commentForm에 해당 post seq 넘겨줘서 그 부분의 commentList만 업데이트하면 되겠다고 생각하지만, 현재는 코멘트 추가 버튼을 누르면 코멘트가 아닌 새 포스트가 추가가 되고, value값을 받아오지 못하는지 빈 내용이 찍힙니다.

<br/>

#### 3-3 Controlled, Uncontrolled component

먼저 PR 올리신 분들이 e.target.value가 아닌 ref.current.value로 상태를 업데이트 하셨던데 어떤 이유일까요. 첫째 시간에 관련 내용을 강의해주신 건 기억나는데 왜 여기서 ref.current.value 를 사용하면 좋은지 궁금합니다.

<br/>

### 4. 폴더 만들어 함수 정리

마찬가지로 먼저 PR 올리신 분들이 utils 혹은 services 이런식으로 폴더를 만들어 기능들을 몰아넣고 App.js에 import 하여 사용하시던데, 정리한 파일이 하나인 경우도, 두 개 이상인 경우도 있었습니다. 보통 어떤 기준으로 폴더를 나누어 정리하면 좋은가요?
