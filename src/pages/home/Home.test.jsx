import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../../redux/projects.slice';
import statusReducer from '../../redux/status.slice';
import { MemoryRouter } from 'react-router-dom';


// Mock IntersectionObserver pour Jest/jsdom
beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() { }
    observe() { }
    unobserve() { }
    disconnect() { }
  };
});
// Mock Firebase Auth
jest.mock('firebase/auth', () => ({
  signInAnonymously: () => Promise.resolve(),
}));
jest.mock('../../utils/firebase', () => ({
  auth: {},
}));

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    status: statusReducer,
  },
  preloadedState: {
    status: {
      isDarkMode: false,
      language: 'fr',    },
    projects: [],
  },
});

test('renders Home component and fetches projects', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
      <Home />
      </MemoryRouter>
    </Provider>
  );
  await waitFor(() => {
    const state = store.getState();
    expect(state.projects.length).toBeGreaterThan(0);
    expect(state.projects[0].title.fr).toBe('Frontend quiz app');
  });
});