'use client';

import React, { useContext, useEffect, useState, createContext } from 'react';

type Theme = 'dark' | 'light';

type ThemeContextProviderProps = {
    children: React.ReactNode
}

type ThemeContextType = {
    theme: Theme;
    toggleClick: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeContextProvider = ({
    children
}: ThemeContextProviderProps) => {

    const [theme, setTheme] = useState<Theme>('light');
    
    const toggleClick = () => {
        if(theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        }else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }

    // This is for the local Storage logic  
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme;
        if(localTheme) {
            setTheme(localTheme);
            if(localTheme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);

  return (
    <ThemeContext.Provider value={{
        theme,
        toggleClick
    }}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(context === null) {
        throw new Error('useTheme Error');
    }

    return context;
}