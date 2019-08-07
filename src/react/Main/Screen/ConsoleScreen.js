import React, { useRef } from 'react';
import Terminal from '../Components/Terminal';
import { css } from 'emotion';

const ConsoleScreen = () => {
  const terminalRef = useRef(null);

  const focusOnTerminal = () => {
    terminalRef.current.focus();
  };

  return (
    <div
      className={css`
        margin: 5px;
        min-height: calc (100vh - 29px);
      `}
      onClick={focusOnTerminal}
    >
      <WelcomeMessage />
      <Terminal terminalRef={terminalRef} />
    </div>
  );
};

const WelcomeMessage = () => {
  return (
    <div
      className={css`
        padding-top: 12px;
      `}
    >
      <h1>Welcome to px-50!</h1>
      <h5>Electron powered Fantasy Console</h5>
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
  );
};

export { ConsoleScreen };
