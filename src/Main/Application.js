import React, { useContext } from 'react';
import { ApplicationProvider, ApplicationContext } from './ApplicationState';
import { DebugScreen } from './Screen/DebugScreen';
import SplashScreen from './Screen/SplashScreen';
import { css } from 'emotion';

const PX50 = () => {
  return (
    <React.Fragment>
      <TitleBar />
      <div
        className={css`
          margin-top: 24px;
        `}
      >
        <ApplicationProvider>
          <ScreenHandler />
        </ApplicationProvider>
      </div>
    </React.Fragment>
  );
};

const ScreenHandler = () => {
  const applicationContext = useContext(ApplicationContext);

  const activeScreen = new Map([
    ['splash', SplashScreen],
    ['debug', DebugScreen]
  ]);

  const Handler = activeScreen.get(applicationContext.activeScreen);
  return <Handler />;
};

const TitleBar = () => {
  return (
    <div
      className={css`
        -webkit-user-select: none;
        -webkit-app-region: drag;
        width: 100%;
        height: 24px;
        position: fixed;
        top: 0;
        background-color: var(--color-0);
        z-index: 10;
      `}
    />
  );
};

export { PX50 };
