- src 폴더 구성 설명

<br/>

> service > apis > config

- Q apis -> config라는 이름 어떤지
<!-- defualtApi , axios -->

<br/>

> service > apis > postService

- Q get / set 함수명
<!-- crud 명칭, insertPost -->

<br/>

> utils > helper.js

- Q post 작성시간, steps, Validation 관리
<!-- steps는 사용하고 있는 해당 pages의 폴더로 분리 -->

<br/>

> App.js

- user state

> layouts > DefaultLayout.js

- nav, page 구현되는 곳.
- 여러 component에서 필요해서 App.js에서 관리
- Home, UserPostList 둘 다에서 필요해서 post state 이곳에서 관리

```js
// 초기값은 localStorage에서 가져온 값
const [posts, setPosts] = useState(get());
```

<br/>

```js
// posts에 변경 일ㅇ나면 localStorage에 저장
useEffect(() => {
  set(posts);
}, [posts]);
```

### Logout

```js
// 로그아웃
const handleLogOut = async () => {
  // user 정보 null로 지정하고
  setUser(null);
  // user정보가 null이 된 걸 로컬 아닌 서버에서 확인사살 해야할 것 같아서 다시 내 정보 받아오는 함수를 실행했는데 지금보니 필요없을 것 같기도 하네.
  try {
    const result = await apis.usersApi.getMyInfo();
    // history 사용할 수 없다는 error가 떠서 useHistory 사용 history정의
    history.push('/login');
    return result;
  } catch (error) {
    alert(error.message);
  }
};
```

    // 토큰 지우고, 통신은 필요없음

<br/>

> pages > Home.js

- Q 여기 로직들은 addPost, addComment 이런식으로 postService에서 관리해주면 좋을 것 같은데, 그럼 현재 postservice에 있는 로직은 어떤폴더에서 관리하면 좋을까

<br/>

> layouts > PublicLayout.js

- users, errors state 관리, input값 바꾸는 handleChangeUsers 함수

<br/>

> pages > SignIn

- Q props 다 {}로 가져오고 있는데, props로 받아오고 component 안에서 props로 구조 분해 할당 하는것이 좋을까

<br/>

```js
const handleSubmitSignin = async (e) => {
  e.preventDefault();
  try {
    // submit button을 클릭하면 server에 id, pw 값 넣어 signIn 요청을 하는 함수 실행.
    const res = await apis.authApi.signIn({
      principal: users.email,
      credentials: String(users.password),
    });
    // 요청 성공하면 localStorage에 signIn token값 저장
    localStorage.setItem('apiKey', 'Bearer ' + res.apiToken);
    // getUser실행
    getUser(user);
    history.push('/');
  } catch (error) {
    alert(error.message);
  }
};

const getUser = async () => {
  try {
    // server에서 token값 전달해 내 정보 받아오는 로직인 getMyInfo() 실행
    const result = await apis.usersApi.getMyInfo();
    // 받아오는 결과값으로 user state 변경
    setUser(result);
    return result;
  } catch (error) {
    alert(error.message);
  }
};
```

<br/>

```
[ JWT(Json Web Token) ]

https://kimyhcj.tistory.com/350

- token 기반 인증 방식.
  1. 사용자가 로그인한다.
  2. 서버측에서 로그인을 인증하고 맞을 경우 클라이언트 측에 signed 토큰을 발급해 준다.
  * signed : 해당 토큰이 서버에서 정상적으로 발급된 토큰임을 증명하는 signature를 담고 있다는 것을 의미.
  3. 클라이언트측에서 서버로 부터 전달받은 토큰을 저장하고 서버에 요청할 때마다 해당 토큰을 함께 서버에 전달 한다.
  4. 서버는 요청이 올때 마다 토큰을 검증한다.


- 클라이언트의 세션 상태를 저장하는 게 아니라 필요한 정보를 토큰 body에 저장해 클라이언트가 가지고 있고 그것을 증명서처럼 사용한다.
```

<br/>

```
[ Bearer HTTP Authentication ]

- 로그인 시 서버로부터 token을 발급받고, 이후 요청 시 해당 token을 Authentication 헤더를 통해 함께 보낸다.token을 만들 때 JWT 방식으로 생성하는 것이 특징.

- 세션 정보가 클라이언트/서버 각각의 저장소에 흩어져있지 않고, 토큰 자체에 내장되어 있다는 것이 특징. 따라서 속도도 빠르고 보안도 우수하다.
```

<br/>

> pages > signUp.js

# join - 415 error

```
{message: "Content type 'application/json;charset=UTF-8' not supported", status: 415}
```

<br/>

내가 주는 data와 server가 받을 수 있는 data 형식이 다를 때 발생한다.

<br/>

## 해결1 : header에 Content type 정의

<br/>

https://lkhlkh23.tistory.com/88

https://qastack.kr/programming/45578844/how-to-set-header-and-options-in-axios

<br/>

## ContentType (String, default : application/x-www-form-urlencoded)

- ContentType은 클라이언트가 전송하는 데이터의 형식이다. ConetentType을 지정하지 않으면 default는 application/x-www-form-urlencoded다.

- 타입으로 서버에 요청을 보내고, 서버는 다른 형식(ex. JSON 형식)으로 데이터를 읽으려고 하면 415 오류가 발생한다.

<br/>

> services > apis > client.js

join 요청이 가고,

error: {message: "Content type 'application/json;charset=UTF-8' not supported", status: 415} 에러떠서 아래 코드 추가

### 방법1

```js
const socialApiClient = axios.create({
  baseURL: SOCIAL_SERVER_URL,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});
```

<br/>

### 방법2

```js
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
```

<br/>

> services > apis > users > index.js

```js
  async register({ email, password, profileImage, name }) {
    try {
      const res = await socialApiClient.post('/api/user/join', { email, password, profileImage, name });
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },
```

<br/>

보통은 위 방법으로 해결이 가능한데, 나의 경우 server가 읽을 수 있는 데이터 형식이 json이 아니었으므로 해결되지 않았다.

<br/>
<hr>
<br/>

## 해결 2 : new FormData

<br/>

server가 읽을 수 있는 형식으로 데이터 변환

<br/>

> services > apis > users > index.js

```js
async register({ principal, credentials, name, profileImage }) {
  const formdata = new FormData();
  formdata.append('credentials', credentials);
  formdata.append('principal', principal);
  formdata.append('file', profileImage);
  formdata.append('name', name);

  try {
    const res = await socialApiClient.post('/api/user/join', formdata);
    return res.data.response;
  } catch (e) {
    throw Error(e.message);
  }
},
```

<br/>

> data > users > actions.js

이 server는 email을 principal로, password을 credentials로 주어야 읽을 수 있다.

```js
export const register = ({ email, password, profileImage, name }) => async (dispatch) => {
  console.log(email, password, profileImage, name);
  try {
    await apis.usersApi.register({
      principal: email,
      credentials: password,
      name,
      profileImage,
    });
    // TODO: After finishing the mission of week 4, we should save user in Redux after register
    dispatch(actions.router.push('/'));
  } catch (error) {
    alert(error.message);
  }
};
```

<br/>

회원가입 요청 성공!
