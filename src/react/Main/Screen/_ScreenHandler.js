import React, { useContext } from 'react';
import { ApplicationContext } from '../Providers/ApplicationState';
import { Boot } from './Boot';
import { DebugScreen } from './DebugScreen';
import { SplashScreen } from './SplashScreen';
import { ConsoleScreen } from './ConsoleScreen';
import { CodeScreen } from './CodeScreen';
import { MusicScreen } from './MusicScreen';
import { GraphicScreen } from './GraphicScreen';

const ScreenHandler = () => {
  const applicationContext = useContext(ApplicationContext);

  const activeScreen = new Map([
    ['splash', SplashScreen],
    ['debug', DebugScreen],
    ['console', ConsoleScreen],
    ['code', CodeScreen],
    ['music', MusicScreen],
    ['graphic', GraphicScreen],
    ['boot', Boot],
    ['shutdown', ShutDown]
  ]);

  const Handler = activeScreen.get(applicationContext.activeScreen);
  return <Handler />;
};

export default ScreenHandler;

const ShutDown = () => {
  return <h5>it is now safe to turn off your px-50 ...</h5>;
};
