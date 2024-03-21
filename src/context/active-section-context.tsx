'use client';
import React, { useState, createContext, useContext } from 'react';
import type { SectionName } from '@/types/types';

type ActiveSectionContextValue = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    lastTimeClick: number;
    setLastTimeClick: React.Dispatch<React.SetStateAction<number>>;
}
export const ActiveSectionContext = createContext<ActiveSectionContextValue | undefined>(undefined);

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}


export const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {

    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [lastTimeClick, setLastTimeClick] = useState(0) //* We Need to disable the observer temprorily when a user
    //* click on a link

  return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        lastTimeClick,
        setLastTimeClick
    }}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);

    if(context === undefined) {
        throw new Error('UseActiveSectionContext Must be used within a ActiveSectionContextProvider');
    }

    return context;
}