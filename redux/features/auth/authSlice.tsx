import { userAndTokenType } from "@/types/userAndTokenType";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface userAndTokenInt {
  userAndToken: userAndTokenType | null;
}

const initialState: userAndTokenInt = {
  userAndToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userAndTokenType>) => {
      state.userAndToken = action.payload;
    },

    logout: (state) => {
      state.userAndToken = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
