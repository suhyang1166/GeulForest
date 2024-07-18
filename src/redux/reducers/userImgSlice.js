import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previewImg: "",
};

const userImgSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setPreviewImg(state, action) {
      state.previewImg = action.payload;
    },
  },
});

export const { setPreviewImg } = userImgSlice.actions;
export default userImgSlice.reducer;
