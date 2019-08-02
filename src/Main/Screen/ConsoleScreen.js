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
      <h1>Welcome to PX-50</h1>
      <h5>Electron powered Fantasy Console</h5>
      <div
        className={css`
          font-size: 12px;
          color: var(--color-13);
        `}
      >
        PX-OS Version 0.0.2
      </div>
      <div
        className={css`
          font-size: 12px;
          color: var(--color-2);
        `}
      >
        run CMD [help] for list of usable CMD
      </div>
    </div>
  );
};

export { ConsoleScreen };
