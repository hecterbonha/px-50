import React, { useState } from 'react';
import { css } from 'emotion';

const DebugScreen = () => {
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

  return (
    <div
      className={css`
        margin: 5px;
        min-height: 100vh;
      `}
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
    </div>
  );
};

export { DebugScreen };
