import IconDesktop from '../../UI/IconDesktop';

import classes from './DesktopView.module.css';

const Desktop = (props) => {
  return (
    <div className={props.className + ' ' + classes['container-grid']}>
      <IconDesktop foldersName='CV & Summary'/>
      <IconDesktop foldersName='Info' />
      <IconDesktop foldersName='Projects' />
    </div>
  );
};

export default Desktop;
