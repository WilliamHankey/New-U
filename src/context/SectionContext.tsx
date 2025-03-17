
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type SectionType = 'wellness' | 'inch';

interface SectionContextType {
  currentSection: SectionType;
  switchSection: (section: SectionType) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state from localStorage or default to 'wellness'
  const [currentSection, setCurrentSection] = useState<SectionType>(() => {
    const savedSection = localStorage.getItem('currentSection');
    return (savedSection as SectionType) || 'wellness';
  });

  // Save to localStorage whenever section changes
  useEffect(() => {
    localStorage.setItem('currentSection', currentSection);
  }, [currentSection]);

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
