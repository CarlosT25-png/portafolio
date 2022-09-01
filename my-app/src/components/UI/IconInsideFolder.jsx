import classes from './IconInsideFolder.module.css';

import fileIcon from '../../assets/txt.png';

const IconInsideFolder = props => {

  return (
    <div className={classes['main-frame']}>
      <img src={fileIcon}/>
      <div className={classes.info} >
        <h4>FILE NAME</h4>
        <h6>FILE TYPE</h6>
        <p>FILE SIZE</p>
      </div>
    </div>
  )
};

export default IconInsideFolder;