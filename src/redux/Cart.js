import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("cart/fetchUser", async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return response.data;
});

const INITIAL_STATE = {
  cartList: [],
  userDetails: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const isItemExists = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      if (isItemExists) {
        state.cartList.map(
          (item) => item?.id === action.payload.id && (item.count = 1)
        );
      } else {
        state.cartList.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    increment: (state, action) => {
      let id = action.payload;
      state.cartList.map((item) => item?.id === id && item.count++);
    },
    decrement: (state, action) => {
      let id = action.payload;
      state.cartList = state.cartList.map((item) => {
        if (item.id === id) {
          item.count = Math.max(0, item.count - 1);
        }
        return item;
      });

      state.cartList = state.cartList.filter((item) => item.count > 0);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, () => {
        console.log("Loading Started");
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userDetails.push(action.payload);
        console.log("Success");
        console.log("Loading Ended!");
      })
      .addCase(fetchUser.rejected, () => {
        console.log("Loading Ended!");
      });
  },
});

export const { increment, decrement, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
