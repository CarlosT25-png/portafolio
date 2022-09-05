import StartMenuIconB from './StartMenuIconB';
import useAddWindowsFrame from '../../../util/useAddWindowsFrame';

import folderLogo from '../../../assets/folder.png';
import classes from './StartMenuShortcuts.module.css';

const StartMenuShortcuts = () => {
  const { addFolderWindows } = useAddWindowsFrame();

  return <div className={classes.container}>
    <StartMenuIconB title='CV & Summary' image={folderLogo} bold={true} onClick={addFolderWindows}/>
    <StartMenuIconB title='Info' image={folderLogo} bold={true} onClick={addFolderWindows}/>
    <StartMenuIconB title='Projects' image={folderLogo} bold={true} onClick={addFolderWindows}/>
  </div>
}

export default StartMenuShortcuts;