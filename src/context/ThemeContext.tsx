import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface ThemeContextType {
  themeColor: string;
  setThemeColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeColor, setThemeColor] = useState('#000000');

  useEffect(() => {
    // Sayfa yüklendiğinde mevcut tema rengini al
    const fetchThemeColor = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/theme');
        if (response.data.success) {
          setThemeColor(response.data.color);
        }
      } catch (error) {
        console.error('Tema rengi alınamadı:', error);
      }
    };

    fetchThemeColor();
  }, []);

  useEffect(() => {
    // CSS değişkenini güncelle
    document.documentElement.style.setProperty('--theme-color', themeColor);
  }, [themeColor]);

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
