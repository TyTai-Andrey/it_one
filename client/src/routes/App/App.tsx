// Core
import * as React from 'react';
// Actions

// Selectors
import { Navigate, Route, Routes } from 'react-router-dom';

import { pathnames } from './utils';
import './App.scss';

import FirstTask from '@pages/FirstTask';
import SecondTask from '@pages/SecondTask';
import ThirdTask from '@pages/ThirdTask';
import Service from '@pages/Service';
import Day from '@pages/Day';

const App = () => {
  return (
    <Routes>
      <Route path={pathnames.firstTask} element={<FirstTask />} />
      <Route path={pathnames.secondTask} element={<SecondTask />} />
      <Route path={pathnames.thirdTask} element={<ThirdTask />} />
      <Route path={pathnames.service} element={<Service />} />
      <Route path={pathnames.day} element={<Day />} />

      <Route path="*" element={<Navigate to={pathnames.firstTask} replace />} />
    </Routes>
  );
};

// Exports
export default App;
