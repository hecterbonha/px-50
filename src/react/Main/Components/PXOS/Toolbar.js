import React from 'react';
import { css } from 'emotion';

const ToolBar = ({ children }) => {
  return (
    <div
      className={css`
        position: absolute;
        bottom: 0;
        background-color: var(--color-15);
        height: 18px;
        width: 100%;
        color: var(--color-0);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      `}
    />
  );
};

export { ToolBar };
