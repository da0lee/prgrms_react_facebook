import apis from '@/services/apis';

export const signUp = ({ email, password, profileImage, name }) => async () => {
  console.log(email, password, profileImage, name);
  try {
    await apis.usersApi.signUp({
      principal: email,
      credentials: password,
      name,
      profileImage,
    });
    history.push('/');
  } catch (error) {
    alert(error.message);
  }
};
