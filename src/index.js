import React from 'react';
import ReactDOM from 'react-dom';
import { PX50 } from './Main/Application';
import { injectGlobal } from 'emotion';

injectGlobal`
@font-face {
  font-family: 'Kongtext';
  src: local('Kongtext'), url(./Assets/Fonts/kongtext.ttf) format('truetype');
}

::-webkit-scrollbar {
  display: none;
}

:root {
  --color-0: #1a1c2c;
  --color-1: #5d275d;
  --color-2: #b13e53;
  --color-3: #ef7d57;
  --color-4: #ffcd75;
  --color-5: #a7f070;
  --color-6: #38b764;
  --color-7: #257179;
  --color-8: #29366f;
  --color-9: #3b5dc9;
  --color-10: #41a6f6;
  --color-11: #73eff7;
  --color-12: #94b0c2;
  --color-13: #566c86;
  --color-14: #333c57;
  --color-15: #f4f4f4;
}

* {
  background-color: var(--color-0);
  font-family: 'Kongtext', Arial, Helvetica, sans-serif;
  color: var(--color-15);
  padding: 0;
  margin: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

`;

ReactDOM.render(<PX50 />, document.getElementById('PX-50'));
