import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
  name: 'status',
  initialState: {
    isDarkMode: 'dark',
    language: 'en',
  },
  reducers: {
    setIsDarkMode: (state, action) => {
      return (state = { ...state, isDarkMode: action.payload });
    },
    setLanguage: (state, action) => {
      return (state = { ...state, language: action.payload });
    },
  },
});

export const { setIsDarkMode, setLanguage } = statusSlice.actions;

export default statusSlice.reducer;
