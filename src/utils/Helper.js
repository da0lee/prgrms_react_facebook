// Post 작성시간
export const dateCreated = (createAt) => {
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

// STEPS
export const STEPS = {
  EMAIL_PASSWORD: 0,
  PROFILE: 1,
};

// 이메일 조건
export const valEmail = (email) => {
  if (email.includes('@')) {
    return true;
  } else if (email.length === 0) {
    return true;
  } else {
    return false;
  }
};

// 비밀번호 조건
export const valPw = (pw) => {
  const numbers = /[0-9]/;
  const spellings = /[a-zA-Z]/;
  if (numbers.test(pw) && spellings.test(pw) && pw.length >= 8) {
    return true;
  } else if (pw.length === 0) {
    return true;
  } else {
    return false;
  }
};

// 비밀번호 확인 조건
export const valPwCheck = (pw, checkedPw) => {
  pw === checkedPw ? true : false;
};
