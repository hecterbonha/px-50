import React, { useRef, useContext } from 'react';
import { ApplicationContext } from '../Providers/ApplicationState';
import Terminal from '../Components/Terminal';
import { FullscreenSizer } from '../Components/FullscreenSizer';
import { css } from 'emotion';

const ConsoleScreen = () => {
  const terminalRef = useRef(null);

  const focusOnTerminal = () => {
    terminalRef.current.focus();
  };

  return (
    <FullscreenSizer onClick={focusOnTerminal} color={'var(--color-14)'}>
      <WelcomeMessage />
      <Terminal terminalRef={terminalRef} />
    </FullscreenSizer>
  );
};

const WelcomeMessage = () => {
  const applicationContext = useContext(ApplicationContext);
  return (
    <div
      className={css`
        padding-top: 0px;
      `}
    >
      {applicationContext.desktopLoaded ? (
        <React.Fragment />
      ) : (
        <div>
          <h1>Welcome to px-50!</h1>
          <h5>Electron powered Fantasy Machine</h5>
          <div
            className={css`
              font-size: 12px;
              color: var(--color-13);
            `}
          >
            px-OS Version 0.0.2
          </div>
          <div
            className={css`
              font-size: 12px;
              color: var(--color-4);
            `}
          >
            run CMD [help] for list of usable CMD
          </div>
        </div>
      )}
    </div>
  );
};

export { ConsoleScreen };
