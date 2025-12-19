import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Work from './Work';
import projectsReducer from '../../../redux/projects.slice';
import statusReducer from '../../../redux/status.slice';

// Mock IntersectionObserver pour Jest/jsdom
beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() { }
    observe() { }
    unobserve() { }
    disconnect() { }
  };
});

// Mock i18n pour éviter les erreurs et contrôler la traduction
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key === 'work.title' ? 'Mes projets' : key,
    i18n: { changeLanguage: () => new Promise(() => { }) },
  }),
  Trans: ({ children }) => children,
}));

// Projet mocké réaliste
const mockProjects = [
  {
    id: 4,
    title: { fr: 'Dashboard Crypto', en: 'Dashboard Crypto' },
    description: {
      fr: "Tableau de bord des crypto-monnaies basé sur l'API Coingecko.",
      en: "Crypto Currency Dashboard Based on the Coingecko API."
    },
    cover: {
      desktop: "https://i.imgur.com/xiArDNL.png",
      mobile: "https://i.imgur.com/PlyAUlr.png",
      tablet: "https://i.imgur.com/H7jv2E6.png"
    },
    features: {
      fr: ["react router", "composants fonctionnels"],
      en: ["react router", "functional components"]
    },
    keywords: ["react-application", "dashboard", "charts"],
    pictures: [
      "https://i.imgur.com/i2eq0VE.png",
      "https://i.imgur.com/dJP1Pok.png"
    ],
    project: "Dashboard Crypto",
    tags: {
      fr: ["react", "redux"],
      en: ["react", "redux"]
    },
    urlCode: "https://github.com/danielgonzalez0/TP4-crypto-watch-dashboard-react",
    urlDemo: "https://tp-4-crypto-watch-dashboard-react.vercel.app/"
  }
];

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    status: statusReducer,
  },
  preloadedState: {
    projects: mockProjects,
    status: {
      isDarkMode: false,
      language: 'fr',
    },
  },
});

test('Work affiche le titre et le projet mocké', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Work />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText('Mes projets')).toBeInTheDocument();
  expect(screen.getByText('Dashboard Crypto')).toBeInTheDocument();
});