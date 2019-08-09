import React from 'react';
import { css } from 'emotion';
const { remote } = window;

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
        font-size: 10px;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--color-14);
      `}
    >
      <div
        className={css`
          margin-left: 5px;
          width: 12px;
          height: 12px;
          background-color: var(--color-2);
        `}
        onClick={() => {
          if (remote) {
            remote.getCurrentWindow().close();
          }
        }}
      />
      <div>px-50 | Fantasy Console</div>
      <div />
    </div>
  );
};

export default TitleBar;
