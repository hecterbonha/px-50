import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ApplicationContext = React.createContext();

const ApplicationProvider = props => {
  const { children } = props;
  const [activeScreen, setActiveScreen] = useState('splash');
  const applicationValue = {
    activeScreen,
    setActiveScreen
  };
  return (
    <ApplicationContext.Provider value={{ ...applicationValue }}>
      {children}
    </ApplicationContext.Provider>
  );
};

ApplicationProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { ApplicationContext, ApplicationProvider };
