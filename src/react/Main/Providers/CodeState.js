import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CodeContext = React.createContext();

const CodeProvider = props => {
  const { children } = props;
  const [activeScreen, setActiveScreen] = useState('splash');
  const codeValue = {
    activeScreen,
    setActiveScreen
  };
  return (
    <CodeContext.Provider value={{ ...codeValue }}>
      {children}
    </CodeContext.Provider>
  );
};

CodeProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { CodeContext, CodeProvider };
