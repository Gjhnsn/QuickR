import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  'Personal': {
    orderNumber: 0,
    id: "1",
    folderColor: "blue",
    isLastActive: false,
    isAccordionOpen: false,
    items: [
      {
        name: "Teriyaki Don Menu",
        id: "023jru0fj2098j32rf",
        url: "www.teriyakidon.com",
        description: "restaurant menu ",
        isSelected: false,
      },
      {
        name: "Insurance",
        id: "203u0jf0j20",
        url: "www.insurance.com",
        description: "insurance website",
        isSelected: false,
      },
      {
        name: "School Registration",
        id: "203u0jf0asdfaj20",
        url: "www.school.com",
        description: "registration info",
        isSelected: false,
      },
    ],
  }, // Personal Ends Here
  'Menu': {
    orderNumber: 1,
    id: "2",
    folderColor: "yellow",
    isLastActive: false,
    isAccordionOpen: false,
    items: [
      {
        name: "Pizza Hut",
        id: "as65d1f65a1sdf",
        url: "www.pizzahut.com",
        description: "pizza menu ",
        isSelected: false,
      },
    ],
  }, // Menu Ends Here
  'Social': {
    orderNumber: 3,
    id: "23",
    folderColor: "darkgreen",
    isLastActive: false,
    isAccordionOpen: false,
    items: [
      {
        name: "Google",
        id: "as65d1f65a1sdf",
        url: "www.google.com",
        description: "pizza menu ",
        isSelected: false,
      },
    ],
  },
}
;

const folderSlice = createSlice({
  name: `folder`,
  initialState: {
    allFolder: INITIAL_STATE,
    isModalOpen: false,
  },

  reducers: {
    addUrlToFolder: (state, action) => {

      const {folderName, addedLink} = action.payload;

      state.allFolder[folderName].items.push(addedLink)

    }, //
    
    openAccordion: (state, action) => {

      const selectedFolder = action.payload;
      const stateKeys = Object.keys(state.allFolder);

      stateKeys.map((key) => {
        if(selectedFolder === key) {
          state.allFolder[key].isAccordionOpen = !state.allFolder[key].isAccordionOpen;
        } else {
          state.allFolder[key].isAccordionOpen = false;
        }
      })

    }, //

    activeLink: (state, action) => {

      const currentFolder = action.payload.currentFolder;
      const currentLink = action.payload.currentLink;

      const stateKeys = Object.keys(state.allFolder);

      stateKeys.map((folder) => {
        if(currentFolder === folder) {
          const currentFoldersLinks = state.allFolder[folder].items;
          currentFoldersLinks.map((link) => {
            if(currentLink.name === link.name) {
              link.isSelected = true;
            } else link.isSelected = false;
          })
        }

        else {
          const currentFoldersLinks = state.allFolder[folder].items;
          currentFoldersLinks.map((link) => {
            link.isSelected = false;
          })
        }
      })

    }, //
  },
});

export const {addUrlToFolder, openAccordion, activeLink } = folderSlice.actions;
export default folderSlice.reducer;
