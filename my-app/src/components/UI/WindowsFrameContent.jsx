import IconInsideFolder from './IconInsideFolder';
import { contentFoldersCV } from '../../util/ContentFolders';

import classes from './WindowsFrameContent.module.css';

const WindowsFrameContent = props => {
  let content = [];
  if(props.type === 'CV & Summary'){
    content = contentFoldersCV;
  }

  return <div className={props.className}>
    <ul className={classes['grid-container']}>
      {content.map(item => <li key={item.title}>{<IconInsideFolder image={item.logo} title={item.title} filetype={item.filetype} size={item.size} file={item.file}/>}</li>)}
    </ul>
  </div>
}

export default WindowsFrameContent;