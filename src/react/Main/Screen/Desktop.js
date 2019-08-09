import React from 'react';
import { css } from 'emotion';

const DesktopBooted = () => {
  return (
    <div
      className={css`
        min-height: 100vh;
        min-width: 100vw;
        background-color: var(--color-14);
      `}
    >
      Woy
    </div>
  );
};

export { DesktopBooted };
