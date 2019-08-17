import React from 'react';
import { css } from 'emotion';

const FullscreenSizer = ({ children, color, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={css`
        outline: none;
        border: none;
        background-color: ${color};
        min-height: calc(100vh - 34px);
      `}
    >
      {children}
    </div>
  );
};

export { FullscreenSizer };
