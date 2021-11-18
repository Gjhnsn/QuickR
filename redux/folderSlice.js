import { createSlice } from "@reduxjs/toolkit";

const folderSlice = createSlice({
  name: `folder`,
  initialState: {
    allFolder: {},
    blobColor: "#5E5CE6",
  },

  reducers: {
    addUrlToFolder: (state, action) => {
      const { folderName, addedLink } = action.payload;

      state.allFolder[folderName].items.push(addedLink);
    },

    setBlobColor: (state, action) => {
      const color = action.payload;
      state.blobColor = color;
    },

    addNewFolder: (state, action) => {
      const {
        name,
        orderNumber,
        id,
        folderColor,
        description,
        isLastActive,
        isAccordionOpen,
        items,
      } = action.payload;

      const newFolder = {
        orderNumber: 4,
        id,
        folderColor,
        description,
        isLastActive,
        isAccordionOpen,
        items,
        name,
      };

      state.allFolder[name] = newFolder;
    },

    editFolder: (state, action) => {
      const { updatedValues, folder } = action.payload;
      const folderToUpdate = Object.assign({}, folder);
      delete state.allFolder[folder.name];
      const updatedFolder = Object.assign(folderToUpdate, updatedValues);
      state.allFolder[updatedFolder.name] = updatedFolder;
    },

    deleteFolder: (state, action) => {
      const { folderToDelete } = action.payload;
      delete state.allFolder[folderToDelete.name];
    },

    editLink: (state, action) => {
      const { linkID, folderName, updatedValues } = action.payload;

      const allLinks = state.allFolder[folderName].items;

      const filteredArr = allLinks.filter((link) => link.id !== linkID);

      const filteredLink = allLinks.filter((link) => link.id === linkID);

      const linkToUpdate = Object.assign({}, filteredLink[0]);
      const updatedLink = Object.assign(linkToUpdate, updatedValues);

      const newLinkArr = [...filteredArr, updatedLink];
      state.allFolder[folderName].items = newLinkArr;
    },

    deleteLink: (state, action) => {
      const { linkID, folderName } = action.payload;
      const allLinks = state.allFolder[folderName].items;
      const filteredArr = allLinks.filter((link) => link.id !== linkID);
      state.allFolder[folderName].items = filteredArr;
    },

    openAccordion: (state, action) => {
      const selectedFolder = action.payload;
      const stateKeys = Object.keys(state.allFolder);

      stateKeys.map((key) => {
        if (selectedFolder === key) {
          state.allFolder[key].isAccordionOpen =
            !state.allFolder[key].isAccordionOpen;
        } else {
          state.allFolder[key].isAccordionOpen = false;
        }
      });
    },

    activeLink: (state, action) => {
      const currentFolder = action.payload.currentFolder;
      const currentLink = action.payload.currentLink;

      const stateKeys = Object.keys(state.allFolder);

      stateKeys.map((folder) => {
        if (currentFolder === folder) {
          const currentFoldersLinks = state.allFolder[folder].items;
          currentFoldersLinks.map((link) => {
            if (currentLink.name === link.name) {
              link.isSelected = true;
            } else link.isSelected = false;
          });
        } else {
          const currentFoldersLinks = state.allFolder[folder].items;
          currentFoldersLinks.map((link) => {
            link.isSelected = false;
          });
        }
      });
    }, //
  },
});

export const {
  addUrlToFolder,
  openAccordion,
  activeLink,
  addNewFolder,
  editFolder,
  deleteFolder,
  editLink,
  deleteLink,
  setBlobColor,
} = folderSlice.actions;
export default folderSlice.reducer;
