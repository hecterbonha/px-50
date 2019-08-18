import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GraphicContext = React.createContext();

const GraphicProvider = props => {
  const { children } = props;
  const [activeScreen, setActiveScreen] = useState('splash');
  const graphicValue = {
    activeScreen,
    setActiveScreen
  };
  return (
    <GraphicContext.Provider value={{ ...graphicValue }}>
      {children}
    </GraphicContext.Provider>
  );
};

GraphicProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { GraphicContext, GraphicProvider };
