'use client'

import {createContext} from 'react';
import {useState} from 'react';

export const ExtensionContext = createContext<{
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    darkMode: false,
    setDarkMode: () => {},
});
export const ExtensionProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

  const [darkMode, setDarkMode] = useState(false)

  const values = {
    darkMode, 
    setDarkMode,
  }

  return (
    <ExtensionContext.Provider value={values}>
      {children}
    </ExtensionContext.Provider>
  );
};