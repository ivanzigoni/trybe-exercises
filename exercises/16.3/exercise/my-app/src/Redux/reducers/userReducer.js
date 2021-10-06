const STATE = {
  username: '',
  isLogged: false,
}

const userReducer = (state = STATE, action) => {
  switch(action.type) {
    case 'LOGGED_IN': 
      return {
      ...state,
      username: action.username,
      isLogged: true,      
    }
    case 'LOGGED_OUT': 
      return {
        ...state,
        username: '',
        isLogged: false,
    }
    default:
      return state;
  }
}

export default userReducer;