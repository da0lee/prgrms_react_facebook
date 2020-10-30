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

// Validation
export const validate = (name, value, users) => {
  if (name === 'email') {
    if (value.length === 0 || value.includes('@')) {
      return true;
    }
  } else if (name === 'password') {
    const numbers = /[0-9]/;
    const spellings = /[a-zA-Z]/;
    if ((numbers.test(value) && spellings.test(value) && value.length >= 8) || value.length === 0) {
      return true;
    }
  } else if (name === 'passwordCheck') {
    if (users.password === value) return true;
  } else {
    return false;
  }
};
