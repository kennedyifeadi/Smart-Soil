import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

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
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <div
          className={`absolute inset-0 transform transition-transform duration-200 ${
            isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
          }`}
        >
          <Moon className="w-6 h-6 text-yellow-500" />
        </div>
        <div
          className={`absolute inset-0 transform transition-transform duration-200 ${
            isDark ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
          }`}
        >
          <Sun className="w-6 h-6 text-yellow-500" />
        </div>
      </div>
    </button>
  );
};
