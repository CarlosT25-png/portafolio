import Draggable from 'react-draggable';

import WindowsFrameContent from './WindowsFrameContent';

import classes from './WindowsFolderFrame.module.css';

import winXpLogo from '../../assets/windowsxp.webp';
import folder from '../../assets/folder.png';
import back from '../../assets/Back.png';
import forward from '../../assets/Forward.png';
import folderUp from '../../assets/Up.png';
import search from '../../assets/Search.png';
import folderView from '../../assets/folders.png';
import folderFrame from '../../assets/folder-view.png';

const WindowsFolderFrame = (props) => {
  const closeHandler = () => {
    console.log('Close')
    props.onClose(props.name);
  }


  return (
    <Draggable handle='#handle'>
      <div className={classes['main-frame']}>
        <div className={classes.head} id='handle'>
          <div>
            <img src={folder} alt="Windows XP folder - Carlos Torres" />
            <h3>{props.name}</h3>
          </div>
          <div>
            <span>&minus;</span>
            <span>&#9634;</span>
            <span onClick={closeHandler}>&#9747;</span>
          </div>
        </div>
        <div className={classes['selection-bar']}>
          <h4>File</h4>
          <h4>Edit</h4>
          <h4>View</h4>
          <h4>Favorites</h4>
          <h4>Tools</h4>
          <h4>Help</h4>
          <img src={winXpLogo} alt="Windows XP Logo - Carlos Torres" />
        </div>
        <div className={classes['options-tools']}>
          <div>
            <img src={back} alt="back windows XP - Carlos Torres" />
            <p>Back</p>
            <img src={forward} alt="forward windows XP - Carlos Torres" />
            <img src={folderUp} alt="folder up windows XP - Carlos Torres" />
          </div>
          <div>
            <img src={search} alt="search windows XP - Carlos Torres" />
            <p>Search</p>
            <img src={folderView} alt="folders windows XP - Carlos Torres" />
            <p>Folders</p>
          </div>
          <div>
            <img
              src={folderFrame}
              alt="folder frame windows XP - Carlos Torres"
            />
          </div>
        </div>
        <WindowsFrameContent className={classes.content} />
      </div>
    </Draggable>
  );
};

export default WindowsFolderFrame;
