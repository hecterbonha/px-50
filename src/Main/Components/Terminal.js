import React, { useState } from 'react';
import { css } from 'emotion';

const Terminal = ({ terminalRef }) => {
  const [messagePool, setMessagePool] = useState([]);
  function handleTerminalKeyStroke(e) {
    if (e.key === 'Enter') {
      const newMessagePool = [...messagePool, terminalRef.current.value];
      setMessagePool(newMessagePool);
      terminalRef.current.value = '';
      terminalRef.current.focus();
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
          <p
            className={css`
              font-size: 14px;
            `}
            key={index}
          >
            {item}
          </p>
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
        `}
      >
        <p>>_ </p>
        <input
          className={css`
            margin-left: 8px;
            outline: none;
            border: none;
            caret-color: #38b764;
            width: 100%;
            resize: none;
            font-size: 14px;
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
