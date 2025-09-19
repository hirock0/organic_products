import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  value: number;
  carts: object[],
  cartFlag: boolean
}

const initialState: InitialState = {
  value: 0,
  carts: [],
  cartFlag: false
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<any>) => {
      state.carts.push(action.payload);
    },
    addCartFlag: (state, action: PayloadAction<any>) => {
      state.cartFlag = action.payload;
    }
  },
});

export const { addCart,addCartFlag } = slice.actions;
export default slice.reducer;
