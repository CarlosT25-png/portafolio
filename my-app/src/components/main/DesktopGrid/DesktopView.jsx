import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { foldersActions } from '../../../store/index';

import IconDesktop from '../../UI/IconDesktop';
import WindowsFolderFrame from '../../UI/WindowsFolderFrame';
import StartMenu from '../StartMenu/StartMenu';

import classes from './DesktopView.module.css';

const Desktop = (props) => {
  const dispatch = useDispatch();
  const folders = useSelector((state) => state.folders.folders);
  const showStartMenu = useSelector((state) => state.folders.showStartMenu);

  const backropHandler = () => {
    dispatch(foldersActions.toggleStartMenu(false));
  }

  const projectsHandler = (data) => {
    dispatch(
      foldersActions.add({
        item: (
          <WindowsFolderFrame key={data.id} name={data.id} icon={data.img} />
        ),
      })
    );
  };

  return (
    <>
      <div className={props.className + ' ' + classes['container-grid']}>
        {showStartMenu && (
          <>
            <div className={classes.backdrop} onClick={backropHandler}></div>
            <StartMenu className={classes.menu} />{' '}
          </>
        )}
        {folders.map((folder) => folder.item)}
        <IconDesktop foldersName="CV & Summary" onClick={projectsHandler} />
        <IconDesktop foldersName="Info" onClick={projectsHandler} />
        <IconDesktop foldersName="Projects" onClick={projectsHandler} />
        <IconDesktop type="email" name="Contact Me" onclick={projectsHandler} />
      </div>
    </>
  );
};

export default Desktop;
