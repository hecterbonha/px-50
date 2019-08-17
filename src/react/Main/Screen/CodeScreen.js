import React from 'react';
import { ToolBar } from '../Components/ToolBar';
import { FullscreenSizer } from '../Components/FullscreenSizer';

const CodeScreen = () => {
  return (
    <FullscreenSizer color={'var(--color-10)'}>
      <ToolBar />
    </FullscreenSizer>
  );
};

export { CodeScreen };
