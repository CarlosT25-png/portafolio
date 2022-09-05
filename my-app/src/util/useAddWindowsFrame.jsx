import { useDispatch } from 'react-redux';
import { foldersActions } from '../store/index';

import WindowsMailForm from '../components/UI/WindowsMailForm';
import WindowsFolderFrame from '../components/UI/WindowsFolderFrame';

const useAddWindowsFrame = () => {
  const dispatch = useDispatch();
  
  const addFolderWindows = (data, contentFolder) => {
    dispatch(
      foldersActions.add({
        item: (
          <WindowsFolderFrame key={data.id} name={data.id} icon={data.img}/>
        ),
      })
    );
  };
  
  const addEmailWindows = data=> {
    dispatch(foldersActions.add({item:
      <WindowsMailForm key={data.id} name={data.id} icon={data.img} />
    }))
  };
  
  const backropHandler = () => {
    dispatch(foldersActions.toggleStartMenu(false));
  }

  return {addFolderWindows, addEmailWindows, backropHandler}
}

export default useAddWindowsFrame;

