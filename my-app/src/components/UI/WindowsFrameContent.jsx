import IconInsideFolder from './IconInsideFolder';

import classes from './WindowsFrameContent.module.css';

const WindowsFrameContent = props => {

  return <div className={props.className}>
    <ul className={classes['grid-container']}>
      <li><IconInsideFolder /></li>
      <li><IconInsideFolder /></li>
      <li><IconInsideFolder /></li>
    </ul>
  </div>
}

export default WindowsFrameContent;