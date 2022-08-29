import { useState } from 'react';

import IconDesktop from '../../UI/IconDesktop';
import WindowsFolderFrame from '../../UI/WindowsFolderFrame';

import classes from './DesktopView.module.css';

const Desktop = (props) => {
  const [frames, setFrames] = useState([]);

  const projectsHandler = () => {
    setFrames((prevState) => [<WindowsFolderFrame />, ...prevState]);
  };

  return (
    <>
      {frames.length > 0 && <div className={classes.frames}>{frames}</div>}
      <div className={props.className + ' ' + classes['container-grid']}>
        <IconDesktop foldersName="CV & Summary" />
        <IconDesktop foldersName="Info" />
        <IconDesktop foldersName="Projects" onClick={projectsHandler} />
      </div>
    </>
  );
};

export default Desktop;
