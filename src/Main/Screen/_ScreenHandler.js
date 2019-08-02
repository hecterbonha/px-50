import React, { useContext } from 'react';
import { ApplicationContext } from '../ApplicationState';
import { DebugScreen } from './DebugScreen';
import { SplashScreen } from './SplashScreen';
import { ConsoleScreen } from './ConsoleScreen';

const ScreenHandler = () => {
  const applicationContext = useContext(ApplicationContext);

  const activeScreen = new Map([
    ['splash', SplashScreen],
    ['debug', DebugScreen],
    ['console', ConsoleScreen]
  ]);

  const Handler = activeScreen.get(applicationContext.activeScreen);
  return <Handler />;
};

export default ScreenHandler;
