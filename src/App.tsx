import React from 'react';
import Global from './Global';
import { FiltersProvider } from './hooks/useFilters';
import Routes from './routes/index.routes';

import 'dotenv';

const App: React.FC = () => (
  <>
    <Global />
    <FiltersProvider>
      <Routes />
    </FiltersProvider>
  </>
);

export default App;
