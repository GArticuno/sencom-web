import React, { createContext, ReactNode, useContext, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { ITheme } from '../models/Theme';

import { lightTheme, darkTheme } from '../styles/themes';

interface IThemeContext {
  usedTheme: ITheme;
  setCurrentTheme: (value: 'light' | 'dark') => void;
}

interface IThemeComponent {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeComponent: React.FC<IThemeComponent> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [usedTheme, setUsedTheme] = useState<ITheme>(lightTheme);

  const setCurrentTheme = (value: 'light' | 'dark') => {
    setUsedTheme(value === 'light' ? lightTheme : darkTheme);
    return setTheme(value);
  };

  const getCurrentTheme = () => {
    return theme === 'light' ? lightTheme : darkTheme;
  };

  return (
    <ThemeContext.Provider value={{ usedTheme, setCurrentTheme }}>
      <ThemeProvider theme={getCurrentTheme()}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeComponent, useTheme };
