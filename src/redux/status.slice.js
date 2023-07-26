import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
  name: 'status',
  initialState: {
    isDarkMode: 'dark',
    language: 'en',
    isMenuOpen: true,
  },
  reducers: {
    setIsDarkMode: (state, action) => {
      return (state = { ...state, isDarkMode: action.payload });
    },
    setLanguage: (state, action) => {
      return (state = { ...state, language: action.payload });
    },
    setMenuIsOpen: (state, action) => {
      return (state = { ...state, isMenuOpen: action.payload });
    },
  },
});

export const { setIsDarkMode, setLanguage, setMenuIsOpen} = statusSlice.actions;

export default statusSlice.reducer;
