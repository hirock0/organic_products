import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface InitialState {
  carts: CartItem[];
  cartFlag: boolean;
}

const initialState: InitialState = {
  carts: [],
  cartFlag: false,
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existing = state.carts.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1; // always increase by 1 when same item added again
      } else {
        state.carts.push({ ...action.payload, quantity: 1 }); // start from 1
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.carts.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.carts.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; 
      }
    },
    addCartFlag: (state, action: PayloadAction<boolean>) => {
      state.cartFlag = action.payload;
    },
  },
});

export const { addCart, increaseQuantity, decreaseQuantity, addCartFlag } =
  slice.actions;

export default slice.reducer;
