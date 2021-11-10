import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  Personal: {
    name: "Personal",
    orderNumber: 0,
    id: "1",
    folderColor: "blue",
    description: "this is a personal folder",
    isLastActive: false,
    isAccordionOpen: false,
    items: [
      {
        name: "Teriyaki Don Menu",
        id: "023jru0fj2098j32rf",
        url: "www.teriyakidon.com",
        description:
          "Menu for local japanese restraunt in fresno Dine in, Take Out, or Delivery. Open 7 days.", //88 characters
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
  Menu: {
    name: "Menu",
    orderNumber: 1,
    id: "2",
    folderColor: "yellow",
    description: "this is a Menu folder with menu codes",
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
  Social: {
    name: "Social",
    orderNumber: 3,
    id: "23",
    folderColor: "darkgreen",
    description: "this is a social folder with IG accounts",
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
};

const folderSlice = createSlice({
  name: `folder`,
  initialState: {
    allFolder: INITIAL_STATE,
  },

  reducers: {
    addUrlToFolder: (state, action) => {
      const { folderName, addedLink } = action.payload;

      state.allFolder[folderName].items.push(addedLink);
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
} = folderSlice.actions;
export default folderSlice.reducer;
