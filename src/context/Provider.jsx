import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './index';

const Provider = ({ children }) => {
  const [showHeader, setShowHeader] = useState({
    showName: false,
    showSearch: false,
    showProfile: false,
  });
  const [pageName, setPageName] = useState('');
  const [showFooter, setShowFooter] = useState(false);
  const contextValue = {
    showHeader,
    setShowHeader,
    pageName,
    setPageName,
    showFooter,
    setShowFooter,
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
