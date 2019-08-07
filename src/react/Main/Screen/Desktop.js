import React, { useContext, useEffect, useState } from 'react';
import { DesktopProvider, DesktopContext } from '../Providers/DesktopState';

const Desktop = () => {
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

const DesktopBooted = () => {
  return <p>Actual Desktop</p>;
};

const DesktopBootProcess = () => {
  const [processMessage, setProcessMessage] = useState(0);

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
      console.log('RUNS');
    }
  }, [processMessage]);
  return <p>Loading {processMessage}%</p>;
};

export { Desktop };
