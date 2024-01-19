// Core
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Styles
import './index.scss';

import App from '@routes/App';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorBoundary from '@components/ErrorBoundary';

const domNode = document.getElementById('root');
const root = createRoot(domNode!);

const renderApp = () =>
  root.render(
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>,
  );
renderApp();
