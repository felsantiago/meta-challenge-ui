import { useReducer } from 'react';
import {
  setSessionValue,
  getSessionValue
} from '../utils/storage';

const reducer = (state, action) => {
  switch (action.type) {
    case 'THEME':
      setSessionValue('theme', action.theme);
      return {
        ...state,
        theme: action.theme
      };
    case 'AUTH':
      setSessionValue('auth', action.token);
      return {
        ...state,
        token: action.token,
        isAuthenticated: action.isAuthenticated
      };
    default: {
      return state;
    }
  }
};

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, {
    theme: getSessionValue('theme'),
    token: getSessionValue('token'),
    isAuthenticated: getSessionValue('isAuthenticated')
  });

  return { state, dispatch };
};

export default useGlobalState;
