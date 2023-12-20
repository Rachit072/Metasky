import { Dispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';
import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const SET_USERS = 'SET_USERS';

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const setUsers = (users: any[]) => ({
  type: SET_USERS,
  payload: users,
});

export const fetchUsers = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(setUsers(response.data));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};