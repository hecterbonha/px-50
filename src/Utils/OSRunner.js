import React, { useContext } from 'react';
import { css } from 'emotion';
import { ApplicationContext } from '../Main/ApplicationState';

const Redirect = props => {
  const applicationContext = useContext(ApplicationContext);
  applicationContext.setActiveScreen(props.string);
  return <h1>Redirecting ....</h1>;
};

const pxCommand = string => {
  const userCommand = string.split(' ')[0];
  const result = commandHandler.get(userCommand);
  return result ? result : `${userCommand}: is an unknown command`;
};

const helpCommand = () => {
  return (
    <React.Fragment>
      <div
        className={css`
          margin-top: 5px;
        `}
      >
        WKWKWKWKWK
      </div>
      <div
        className={css`
          margin-top: 5px;
        `}
      >
        WKWKWKWKWK
      </div>
      <div
        className={css`
          margin-top: 5px;
        `}
      >
        WKWKWKWKWK
      </div>
    </React.Fragment>
  );
};

const debugCommand = () => {
  return (
    <div
      className={css`
        margin-top: 5px;
      `}
    >
      <Redirect string="debug" />
    </div>
  );
};

const commandHandler = new Map([
  ['help', helpCommand()],
  ['debug', debugCommand()]
]);

export { pxCommand };
