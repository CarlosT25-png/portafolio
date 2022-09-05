import StartMenuIconB from './StartMenuIconB';
import useAddWindowsFrame from '../../../util/useAddWindowsFrame';
import Snake from 'react-simple-snake/lib/snake';

import snakeLogo from '../../../assets/snake-game.png';
import folderLogo from '../../../assets/folder.png';
import classes from './StartMenuShortcuts.module.css';

const StartMenuShortcuts = () => {
  const { addFolderWindows, addBasicWindowsFrame } = useAddWindowsFrame();

  return (
    <div className={classes.container}>
      <StartMenuIconB
        title="CV & Summary"
        image={folderLogo}
        bold={true}
        onClick={addFolderWindows}
      />
      <StartMenuIconB
        title="Info"
        image={folderLogo}
        bold={true}
        onClick={addFolderWindows}
      />
      <StartMenuIconB
        title="Projects"
        image={folderLogo}
        bold={true}
        onClick={addFolderWindows}
      />
      <StartMenuIconB
        title="Snake Game"
        image={snakeLogo}
        bold={true}
        onClick={addBasicWindowsFrame}
        content={
          <Snake percentageWidth='50' />
        }
      />
    </div>
  );
};

export default StartMenuShortcuts;
