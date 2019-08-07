import React from 'react';
import { ApplicationProvider } from './Providers/ApplicationState';
import { css } from 'emotion';
import TitleBar from './Components/TitleBar';
import ScreenHandler from './Screen/_ScreenHandler';

const PX50 = () => {
  return (
    <React.Fragment>
      <TitleBar />
      <div
        className={css`
          margin-top: 24px;
        `}
      >
        <ApplicationProvider>
          <ScreenHandler />
        </ApplicationProvider>
      </div>
    </React.Fragment>
  );
};

export { PX50 };
