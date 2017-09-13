export const selectUser = (user) => {
  console.log("YOu clicked on user: ", user.first);
  return {
    type: 'USER_SELECTED',
    payload: user
  }
};
