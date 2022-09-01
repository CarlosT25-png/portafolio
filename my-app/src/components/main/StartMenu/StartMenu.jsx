import StartMenuHeader from './StartMenuHeader';
import StartMenuNetworks from './StartMenuNetworks';
import StartMenuShortcuts from './StartMenuShortcuts';

import classes from './StartMenu.module.css';

const StartMenu = props => {
  return (
    <div className={props.className + ' ' + classes.frame}>
      <StartMenuHeader />
      <StartMenuNetworks />
      <StartMenuShortcuts />
      <footer>
        TURN OFF
      </footer>
    </div>
  )
}

export default StartMenu;