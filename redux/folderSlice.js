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
    folderColor: "blue",
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
  } // Menu Ends Here
}
;

const folderSlice = createSlice({
  name: `folder`,
  initialState: INITIAL_STATE,
  reducers: {
    addUrlToFolder: (state, action) => {

      const {folderName, addedLink} = action.payload;

      state[folderName].items.push(addedLink)

    }
  }
});

export const {addUrlToFolder} = folderSlice.actions;
export default folderSlice.reducer;
