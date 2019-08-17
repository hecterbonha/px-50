import React, { useState } from 'react';
import { css } from 'emotion';
import { pxCommand, checkIfRedirecting } from '../../Utils/OSRunner';

const Terminal = ({ terminalRef }) => {
  const [messagePool, setMessagePool] = useState([]);
  async function handleTerminalKeyStroke(e) {
    const terminalCurrentValue = terminalRef.current.value;
    if (e.key === 'Enter') {
      const terminalResponse = pxCommand(terminalRef.current.value);
      if (terminalResponse === 'clearTerminal') {
        setMessagePool([]);
        window.scrollTo(0, 0);
        terminalRef.current.value = '';
      } else {
        const newMessagePool = [...messagePool, terminalResponse];
        await setMessagePool(newMessagePool);
        if (!checkIfRedirecting(terminalCurrentValue)) {
          terminalRef.current.value = '';
          window.scrollTo(0, 10000 + 500000 * messagePool.length);
          terminalRef.current.focus();
        }
      }
    }
  }
  return (
    <React.Fragment>
      <div
        className={css`
          margin-top: 8px;
          margin-bottom: 8px;
          background-color: var(--color-5);
        `}
      />
      {messagePool ? (
        messagePool.map((item, index) => (
          <div
            className={css`
              font-size: 14px;
              margin-top: 5px;
            `}
            key={index}
          >
            {item}
          </div>
        ))
      ) : (
        <React.Fragment />
      )}
      <div
        className={css`
          height: 16px;
          display: flex;
          flex-direction: row;
          alignitems: center;
          margin-top: 8px;
        `}
      >
        <p>>_ </p>
        <input
          className={css`
            margin-left: 8px;
            outline: none;
            border: none;
            caret-color: var(--color-10);
            width: 100%;
            resize: none;
            font-size: 14px;
            background-color: var(--color-14);
          `}
          autoFocus
          ref={terminalRef}
          onKeyPress={e => handleTerminalKeyStroke(e)}
        />
      </div>
    </React.Fragment>
  );
};

export default Terminal;
