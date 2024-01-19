// Core
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Styles
import './index.scss';

import App from '@routes/App';
import ErrorBoundary from '@components/ErrorBoundary';

import { Layout } from '@compositions/Layout';

import { store } from './store';

const domNode = document.getElementById('root');
const root = createRoot(domNode!);

const renderApp = () =>
  root.render(
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>,
  );

renderApp();
