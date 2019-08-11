import React from 'react';
import { ApplicationProvider } from './Providers/ApplicationState';
import { css } from 'emotion';
import TitleBar from './Components/TitleBar';
import ScreenHandler from './Screen/_ScreenHandler';

const PX50 = () => {
  return (
    <React.Fragment>
      <TitleBar />
      <ApplicationProvider>
        <div
          className={css`
            margin-top: 24px;
            padding: 5px;
          `}
        >
          <ScreenHandler />
        </div>
      </ApplicationProvider>
    </React.Fragment>
  );
};

export { PX50 };
