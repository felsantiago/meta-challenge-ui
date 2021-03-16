import PropTypes from 'prop-types';

import useGlobalState from './useGlobalState';
import AppContext from './appContext';

const GlobalStateProvider = ({ children }) => (
  <AppContext.Provider value={useGlobalState()}>{children}</AppContext.Provider>
);

GlobalStateProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default GlobalStateProvider;
