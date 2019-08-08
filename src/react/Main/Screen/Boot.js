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
  const desktopContext = useContext(DesktopContext);
  if (desktopContext.isBoooted) {
    return <DesktopBooted />;
  }
  return <DesktopBootProcess />;
};

const DesktopBootProcess = () => {
  const [processMessage, setProcessMessage] = useState(0);
  const applicationContext = useContext(ApplicationContext);

  useEffect(() => {
    const handleLoad = () => {
      for (let i = 0; i < 101; i++) {
        setTimeout(async () => {
          await setProcessMessage(i);
        }, i + 20 * i);
      }
    };
    handleLoad();
  }, []);

  useEffect(() => {
    if (processMessage === 100) {
      applicationContext.setDesktopLoaded(true);
    }
  }, [processMessage, applicationContext]);
  return <p>Loading {processMessage}%</p>;
};

export { Boot };
