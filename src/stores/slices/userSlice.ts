import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  id: string;
  name: string;
  email: string;
};

const initialState: UserState = {
  id: '',
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
