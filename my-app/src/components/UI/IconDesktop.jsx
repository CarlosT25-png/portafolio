import folderIcon from '../../assets/folder.png';

import classes from './IconDesktop.module.css';

const clickHandler = event => {
  props.onClick({id: props.foldersName, img:folderIcon});
}

const IconDesktop = props => {
  return (
    <div className={classes.icon} onClick={props.onClick}>
      <img src={folderIcon} alt={props.foldersName}/>
      <h4>{props.foldersName}</h4>
    </div>
  )
}

export default IconDesktop;