import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MusicContext = React.createContext();

const MusicProvider = props => {
  const { children } = props;
  const [activeScreen, setActiveScreen] = useState('splash');
  const musicValue = {
    activeScreen,
    setActiveScreen
  };
  return (
    <MusicContext.Provider value={{ ...musicValue }}>
      {children}
    </MusicContext.Provider>
  );
};

MusicProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { MusicContext, MusicProvider };
