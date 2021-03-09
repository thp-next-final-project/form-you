import { createStore } from 'redux';
import Cookies from 'js-cookie';
import { COOKIE_NAME } from '../../config';
import { LOGIN, LOGOUT } from './actions'
import { CurrentUser, Payload } from '../types/models';



const initialUserData:CurrentUser = {
  id: null,
  email: null,
  role: null,
  isLogged: false
}

const userReducer = (state = initialUserData, payload:Payload) => {
  const { type, data } = payload;

  switch (type) {
    case LOGIN:
      if (!data || !data.user) {
        throw new Error('Data for login must not be empty.');
      }
      if (!data.jwt) {
        throw new Error('Missing JWT.');
      }
      Cookies.set(COOKIE_NAME, data.jwt);
      return {
        id: data.user.id,
        role: data.user.role,
        email: data.user.email,
        isLogged: true
      };
    case LOGOUT:
      Cookies.remove(COOKIE_NAME);
      return {
        id: null,
        role: null,
        email: null,
        isLogged: false
      };
    default:
      return state;
  }
}

export default createStore(userReducer);