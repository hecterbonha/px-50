import React from 'react';
import { css } from 'emotion';

const PX50 = () => {
  return (
    <FullScreen>
      <h1>Screen</h1>
    </FullScreen>
  );
};

export { PX50 };

const FullScreen = ({ children }) => {
  return (
    <div
      className={css`
        min-height: 100vh;
        background-color: aqua;
      `}
    >
      {children}
    </div>
  );
};
