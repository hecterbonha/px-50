import React, { useState, useEffect, useContext } from 'react';
import { ApplicationContext } from '../ApplicationState';
import * as Tone from 'tone';

const SplashScreen = () => {
  const applicationContext = useContext(ApplicationContext);
  const [textState, setTextState] = useState('');

  useEffect(() => {
    let i = 0;
    const txt = 'PX-50';
    const speed = 200;
    function wowEffect() {
      if (i < txt.length) {
        setTextState(prevState => (prevState += txt.charAt(i)));
        i++;
        setTimeout(wowEffect, speed);
      } else {
        setTimeout(() => {
          applicationContext.setActiveScreen('console');
        }, 200);
      }
    }
    const synth = new Tone.AMSynth().toMaster();
    synth.triggerAttackRelease('C8', 0.1, 0);
    synth.triggerAttackRelease('E8', 0.2, 0.2);
    synth.triggerAttackRelease('D8', 0.1, 0.3);
    synth.triggerAttackRelease('F8', 0.2, 0.4);
    wowEffect();
  }, [applicationContext]);
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
