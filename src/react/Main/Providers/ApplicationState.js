import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ApplicationContext = React.createContext();

const ApplicationProvider = props => {
  const { children } = props;
  // Default is 'splash'
  const [activeScreen, setActiveScreen] = useState('splash');
  const [desktopLoaded, setDesktopLoaded] = useState(false);

  const applicationValue = {
    activeScreen,
    setActiveScreen,
    desktopLoaded,
    setDesktopLoaded
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
