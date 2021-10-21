import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import AppProvider from './context';

const App: React.FC = () => (
  <AppProvider>
    <Router>
      <Routes />
    </Router>
  </AppProvider>
);

export default App;
