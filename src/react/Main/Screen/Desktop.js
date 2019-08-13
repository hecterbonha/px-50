import React from 'react';
import { MainDesktop } from '../Components/PXOS/MainDesktop';
import { ToolBar } from '../Components/PXOS/Toolbar';

const DesktopBooted = () => {
  return (
    <MainDesktop>
      {/* <ActiveIcon /> */}
      <ToolBar />
    </MainDesktop>
  );
};

export { DesktopBooted };
