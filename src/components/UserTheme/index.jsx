import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';

import { getTheme } from '../../styles/theme';
import AppContext from '../../store/appContext';

const UserTheme = ({ children, parentTheme }) => {
  const { dispatch, state } = useContext(AppContext);
  const stateTheme = parentTheme || state.theme;

  const theme = getTheme(stateTheme);

  useEffect(() => {
    if (parentTheme) {
      const handleDispatch = () => dispatch({
        type: 'THEME',
        theme: parentTheme
      });
      handleDispatch();
    }
  }, [parentTheme]);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

UserTheme.defaultProps = {
  parentTheme: 'meta'
};

UserTheme.propTypes = {
  children: PropTypes.node.isRequired,
  parentTheme: PropTypes.string
};

export default UserTheme;
