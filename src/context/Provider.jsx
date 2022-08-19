import PropTypes from 'prop-types';
import React from 'react';
import Context from './index';

const Provider = ({ children }) => {
  const contextValue = {

  };

  return <Context.Provider value={ contextValue }>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
