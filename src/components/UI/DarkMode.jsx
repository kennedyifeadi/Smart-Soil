import React, { useState, useEffect, useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { DarkToggleContext } from '../context/DarkModeContext';

export const ThemeToggle = () => {
    const {isDark, setIsDark} = useContext(DarkToggleContext)
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    updateTheme(prefersDark);
  }, []);

  const updateTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    updateTheme(!isDark);
    console.log('theme toggled', isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full ${isDark ? "bg-[#27272a]" : "bg-gray-200"} transition-colors duration-200`}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <div
          className={`absolute inset-0 transform transition-transform duration-200 ${
            isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
          }`}
        >
          <Sun className="w-6 h-6 text-[#cfdf32]" />
        </div>
        <div
          className={`absolute inset-0 transform transition-transform duration-200 ${
            isDark ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
          }`}
        >
            <Moon className="w-6 h-6 text-[#ffbc02]  " />  
        </div>
      </div>
    </button>
  );
};
