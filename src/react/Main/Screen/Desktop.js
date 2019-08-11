import React from 'react';
import { css } from 'emotion';

const DesktopBooted = () => {
  return (
    <div
      className={css`
        background-color: var(--color-7);
        margin: -5px;
        min-height: calc(100vh - 24px);
        font-size: 12px;
      `}
    >
      <ToolBar />
    </div>
  );
};

const ToolBar = () => {
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
        align-items: center;
        padding: 5px;
      `}
    >
      | CODE | SFX | ART | MAP |
    </div>
  );
};

export { DesktopBooted };
