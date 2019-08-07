import React, { useContext } from 'react';
import { ApplicationContext } from '../Providers/ApplicationState';
import { Desktop } from './Desktop';
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
    ['desktop', Desktop]
  ]);

  const Handler = activeScreen.get(applicationContext.activeScreen);
  return <Handler />;
};

export default ScreenHandler;
