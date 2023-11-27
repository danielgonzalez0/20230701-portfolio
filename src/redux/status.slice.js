import { createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {Object} AppState
 * @property {Object} status - État lié au statut de l'application.
 * @property {string} status.isDarkMode - Indique si le mode sombre est activé.
 * @property {string} status.language - Langue actuellement sélectionnée.
 * @property {boolean} status.isMenuOpen - Indique si le menu est ouvert.
 */
export const statusSlice = createSlice({
  name: 'status',
 initialState: {
    isDarkMode: 'dark',
    language: 'fr',
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

export const { setIsDarkMode, setLanguage, setMenuIsOpen } =
  statusSlice.actions;

export default statusSlice.reducer;
