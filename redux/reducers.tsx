import { LOGIN_USER, SET_USERS } from './actions';

const initialState = {
  isAuthenticated: false,
  users: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
