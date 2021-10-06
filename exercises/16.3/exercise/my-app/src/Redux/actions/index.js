export const loginAction = (username) => ({
  type: 'LOGGED_IN',
  username,
})

export const logoutAction = () => ({
  type: 'LOGGED_OUT'
})
