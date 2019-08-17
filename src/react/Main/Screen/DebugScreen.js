import React, { useState, useRef, useEffect, useContext } from 'react';
import { ApplicationContext } from '../Providers/ApplicationState';
import { css } from 'emotion';

const DebugScreen = () => {
  const escapeRef = useRef(null);
  const applicationContext = useContext(ApplicationContext);

  const colorArray = [
    '#1a1c2c',
    '#5d275d',
    '#b13e53',
    '#ef7d57',
    '#ffcd75',
    '#a7f070',
    '#38b764',
    '#257179',
    '#29366f',
    '#3b5dc9',
    '#41a6f6',
    '#73eff7',
    '#94b0c2',
    '#566c86',
    '#333c57',
    '#f4f4f4'
  ];
  const generateString = () => {
    let s = '';
    for (var i = 32; i <= 126; i++) {
      s += String.fromCharCode(i);
    }
    return s;
  };
  const [allStringGenerated] = useState(generateString);
  const [allColorGenerated] = useState(colorArray);

  useEffect(() => {
    escapeRef.current.focus();
  });

  return (
    <div
      className={css`
        outline: none;
        border: none;
        min-height: calc(100vh - 34px);
      `}
      tabIndex="0"
      ref={escapeRef}
      onKeyDown={e => {
        if (e.key === 'Escape') {
          applicationContext.setActiveScreen('console');
        }
      }}
      onClick={() => {
        escapeRef.current.focus();
      }}
    >
      <div>
        <h4>Generate String</h4>
        <br />
        <p
          className={css`
            word-wrap: break-word;
          `}
        >
          {allStringGenerated}
        </p>
        <br />
        <h4>Generate Colors</h4>
        <br />
        {allColorGenerated.map(color => {
          return (
            <div
              style={{
                backgroundColor: color,
                color: color === '#f4f4f4' ? '#1a1c2c' : '#f4f4f4'
              }}
              key={color}
            >
              {color}
            </div>
          );
        })}
      </div>
      <div
        className={css`
          font-size = 14px;  
          color: var(--color-4);
          margin-top: 24px;
        `}
      >
        Press ESC to go to console
      </div>
    </div>
  );
};

export { DebugScreen };
