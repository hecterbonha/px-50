import React, { useContext, useEffect, useState } from 'react';
import { DesktopProvider, DesktopContext } from '../Providers/DesktopState';
import { ApplicationContext } from '../Providers/ApplicationState';
import { DesktopBooted } from './Desktop';

const Boot = () => {
  return (
    <DesktopProvider>
      <DesktopHelper />
    </DesktopProvider>
  );
};

const DesktopHelper = () => {
  const [helper, setHelper] = useState(false);
  const desktopContext = useContext(DesktopContext);

  useEffect(() => {
    if (desktopContext.isBooted) {
      setHelper(true);
    }
  }, [desktopContext.isBooted]);
  if (helper) {
    return <DesktopBooted />;
  }
  return <DesktopBootProcess />;
};

const DesktopBootProcess = () => {
  const [processMessage, setProcessMessage] = useState(0);
  const applicationContext = useContext(ApplicationContext);
  const desktopContext = useContext(DesktopContext);

  useEffect(() => {
    const handleLoad = () => {
      for (let i = 0; i < 101; i++) {
        setTimeout(async () => {
          await setProcessMessage(i);
        }, i + 20);
      }
    };
    handleLoad();
  }, []);

  useEffect(() => {
    if (processMessage === 100) {
      applicationContext.setDesktopLoaded(true);
      desktopContext.setIsBooted(true);
    }
  }, [processMessage, applicationContext, desktopContext]);
  return <p style={{ padding: '5px' }}>Loading {processMessage}%</p>;
};

export { Boot };
