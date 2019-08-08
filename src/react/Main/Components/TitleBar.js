import React from 'react';
import { css } from 'emotion';

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
        justify-content: center;
        align-items: center;
      `}
    >
      px-50
    </div>
  );
};

export default TitleBar;
