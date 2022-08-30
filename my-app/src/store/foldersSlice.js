import { createSlice } from "@reduxjs/toolkit";

const foldersInitialState = { folders: [] };

const foldersSlice = createSlice({
  name: 'folders',
  initialState: foldersInitialState,
  reducers: {
    add(state, action) {
      console.log(action.payload);
      state.folders.push(action.payload);
    },
    delete(state, action){
      const id = action.payload;
      const idx = state.folders.findIndex(folder => folder.item.key === id);
      state.folders.splice(idx, 1);
    }
  }
})

export default foldersSlice;