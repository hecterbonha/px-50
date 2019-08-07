import React, { useContext } from 'react';
import { css } from 'emotion';
import { ApplicationContext } from '../Main/Providers/ApplicationState';
const { remote } = window;

const Redirect = props => {
  const applicationContext = useContext(ApplicationContext);
  applicationContext.setActiveScreen(props.string);
  return <h4>Redirecting ....</h4>;
};

const pxCommand = string => {
  const userCommand = string.split(' ')[0];
  const result = commandHandler(userCommand);
  return result ? result : `${userCommand}: is an unknown command`;
};

const helpCommand = () => {
  const listOfCommand = [
    { command: 'px', description: 'Launch px-OS desktop' },
    { command: 'help', description: 'spawn all available command' },
    { command: 'clear', description: 'clear the command history on screen' },
    { command: 'debug', description: 'show debug screen' },
    { command: 'exit', description: 'shutdown px-50' }
  ];
  return (
    <React.Fragment>
      {listOfCommand.map(command => (
        <div
          className={css`
            margin-top: 5px;
          `}
          key={command.description}
        >
          <span
            className={css`
              color: var(--color-4);
            `}
          >
            {command.command}
          </span>
          : {command.description}
        </div>
      ))}
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

const clearCommand = () => {
  return 'clearTerminal';
};

const exitCommand = () => {
  remote.getCurrentWindow().close();
  return 'Shutting down ...';
};

const pxOSCommand = () => {
  return (
    <div
      className={css`
        margin-top: 5px;
      `}
    >
      <Redirect string="desktop" />
    </div>
  );
};

const commandHandler = command => {
  switch (command) {
    case 'exit':
      return exitCommand();
    case 'help':
      return helpCommand();
    case 'debug':
      return debugCommand();
    case 'clear':
      return clearCommand();
    case 'px':
      return pxOSCommand();
    default:
  }
};

const redirectChecker = new Map([['debug', true], ['px', true], [false]]);

const checkIfRedirecting = props => {
  return redirectChecker.get(props);
};

export { pxCommand, checkIfRedirecting };
