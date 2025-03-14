
import React, { createContext, useContext, useState, ReactNode } from 'react';

type SectionType = 'wellness' | 'inch';

interface SectionContextType {
  currentSection: SectionType;
  switchSection: (section: SectionType) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [currentSection, setCurrentSection] = useState<SectionType>('wellness');

  const switchSection = (section: SectionType) => {
    setCurrentSection(section);
  };

  return (
    <SectionContext.Provider value={{ currentSection, switchSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = (): SectionContextType => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};
