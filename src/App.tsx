import React from 'react';
import { Toaster } from 'react-hot-toast';

import { ThemeComponent } from './hooks/theme';
import { MainPage } from './pages';
import GlobalStyle from './styles';

function App() {
  return (
    <div className="App">
      <ThemeComponent>
        <GlobalStyle />
        <MainPage />
        <Toaster />
      </ThemeComponent>
    </div>
  );
}

export default App;
