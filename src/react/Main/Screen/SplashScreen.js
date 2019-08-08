import React, { useState, useEffect, useContext } from 'react';
import { ApplicationContext } from '../Providers/ApplicationState';
import * as Tone from 'tone';

const SplashScreen = () => {
  const applicationContext = useContext(ApplicationContext);
  const [textState, setTextState] = useState('');

  useEffect(() => {
    const synth = new Tone.AMSynth().toMaster();
    synth.triggerAttackRelease('C8', 0.1, 0);
    synth.triggerAttackRelease('E8', 0.2, 0.2);
    synth.triggerAttackRelease('D8', 0.1, 0.3);
    synth.triggerAttackRelease('F8', 0.2, 0.4);
    const px = ['p', 'px', 'px-', 'px-5', 'px-50', '[px-50', '[px-50]'];
    const handleLoad = () => {
      for (let i = 0; i < 7; i++) {
        setTimeout(async () => {
          await setTextState(px[i]);
        }, i + 200 * i);
      }
    };
    handleLoad();
  }, []);

  useEffect(() => {
    if (textState === '[px-50]') {
      setTimeout(() => {
        return applicationContext.setActiveScreen('console');
      }, 300);
    }
  }, [textState, applicationContext]);
  return (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div>{textState}</div>
    </div>
  );
};

export { SplashScreen };
