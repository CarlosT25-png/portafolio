import { useState } from 'react';

import IconDesktop from '../../UI/IconDesktop';
import WindowsFolderFrame from '../../UI/WindowsFolderFrame';

import classes from './DesktopView.module.css';

const Desktop = (props) => {
  const [frames, setFrames] = useState([]);

  const onCloseHandler = name => {
    console.log('newFrames');
    setFrames(prevFrame => {
      const newFrames = prevFrame.filter(item => item.name !== name);
      console.log(newFrames);
      return newFrames;
    })
  }

  const projectsHandler = data => {
    setFrames((prevState) => [<WindowsFolderFrame key={data.name} name={data.name} icon={data.img} onClose={onCloseHandler} />, ...prevState]);
  };

  return (
    <>
      <div className={props.className + ' ' + classes['container-grid']}>
        {frames.length > 0 && frames}
        <IconDesktop foldersName="CV & Summary" />
        <IconDesktop foldersName="Info" />
        <IconDesktop foldersName="Projects" onClick={projectsHandler} />
      </div>
    </>
  );
};

export default Desktop;
