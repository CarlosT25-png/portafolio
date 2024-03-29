import { useDispatch } from 'react-redux';
import { foldersActions } from '../store/index';

import WindowsMailForm from '../components/UI/WindowsMailForm';
import WindowsFolderFrame from '../components/UI/WindowsFolderFrame';
import WindowsBasicFrame from '../components/UI/WindowsBasicFrame';
import InternetExplorerFrame from '../components/UI/projects/InternetExplorerFrame';

const useAddWindowsFrame = () => {
  const dispatch = useDispatch();
  
  const addFolderWindows = data => {
    dispatch(
      foldersActions.add({
        item: (
          <WindowsFolderFrame key={data.id} name={data.id} icon={data.img}/>
        ),
      })
    );
  };

  const addBasicWindowsFrame = (data, content) => {
    dispatch(
      foldersActions.add({
        item: (
          <WindowsBasicFrame key={data.id} name={data.id} icon={data.img}>
            {content}
          </WindowsBasicFrame>
        ),
      })
    );
  }

  const addInternetExplorerFrame = (data, content) => {
    dispatch(
      foldersActions.add({
        item: (
          <InternetExplorerFrame key={data.id} name={data.id}>
            {content}
          </InternetExplorerFrame>
        ),
      })
    );
  }
  
  const addEmailWindows = data=> {
    dispatch(foldersActions.add({item:
      <WindowsMailForm key={data.id} name={data.id} icon={data.img} />
    }))
  };
  
  const backropHandler = () => {
    dispatch(foldersActions.toggleStartMenu(false));
  }

  return {addFolderWindows, addEmailWindows, backropHandler, addBasicWindowsFrame, addInternetExplorerFrame}
}

export default useAddWindowsFrame;

