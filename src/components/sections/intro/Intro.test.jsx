import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Intro from './Intro';
import statusReducer from '../../../redux/status.slice';

// Mock i18n pour éviter les erreurs et contrôler la traduction
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key === 'intro.title' ? 'Bienvenue sur mon portfolio' : key,
    i18n: { changeLanguage: () => new Promise(() => { }) },
  }),
  Trans: ({ children }) => children,
}));

const store = configureStore({
  reducer: {
    status: statusReducer,
  },
  preloadedState: {
    status: {
      isDarkMode: false,
      language: 'fr',
    },
  },
});

test('Intro affiche le titre traduit', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Intro />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText('Bienvenue sur mon portfolio')).toBeInTheDocument();
});