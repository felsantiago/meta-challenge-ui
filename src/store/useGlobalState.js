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
    default: {
      return state;
    }
  }
};

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, {
    theme: getSessionValue('theme')
  });

  return { state, dispatch };
};

export default useGlobalState;
