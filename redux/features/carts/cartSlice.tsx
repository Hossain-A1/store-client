import { productDataType } from "@/types/product.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
interface cartItemInt {
  cartItems: productDataType[];
}

const initialState: cartItemInt = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existedCartItem = state.cartItems.findIndex(
        (cart) => cart._id === action.payload._id
      );

      if (existedCartItem >= 0) {
        state.cartItems[existedCartItem].count += 1;
      } else {
        // add to cart
        const assembled = { ...action.payload, count: 1 };
        state.cartItems.push(assembled);
        toast.success("Product added Successfully!");
      }
    },

    removeCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      toast(`Drone ${action.payload} removed Successfully!`, {
        icon: "👏",
      });
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
