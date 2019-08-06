import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DesktopContext = React.createContext();

const DesktopProvider = props => {
  const { children } = props;
  const [activeScreen, setActiveScreen] = useState('splash');
  const desktopValue = {
    activeScreen,
    setActiveScreen
  };
  return (
    <DesktopContext.Provider value={{ ...desktopValue }}>
      {children}
    </DesktopContext.Provider>
  );
};

DesktopProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { DesktopContext, DesktopProvider };
