import React from 'react';
import { css } from 'emotion';

const MainDesktop = ({ children }) => {
  return (
    <div
      className={css`
        background-color: var(--color-7);
        margin: -5px;
        min-height: calc(100vh - 24px);
        font-size: 12px;
      `}
    >
      {children}
    </div>
  );
};

export { MainDesktop };
