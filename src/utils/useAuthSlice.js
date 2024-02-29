import { createSlice } from "@reduxjs/toolkit";

const useAuthSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    userName: "",
  },
  reducers: {
    addUser: (state, action) => {
      const { token, userName } = action.payload;
      // mutating the state over here
      state.token = token;
      state.userName = userName;
    },
    clearUser: (state, action) => {
      // state.items.length = 0; // []
      state.token = "";
      state.userName = "";
      //   return { items: [] };
    },
  },
});
export const { addUser, clearUser } = useAuthSlice.actions;

export default useAuthSlice.reducer;
