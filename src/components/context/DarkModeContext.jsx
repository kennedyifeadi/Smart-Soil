import React, { createContext, useState } from 'react'
export const DarkToggleContext = createContext()
export const DarkToggleProvider = ({ children}) => {
    const [isDark, setIsDark] = useState(false);
  return (
    <DarkToggleContext.Provider 
    value={{
        isDark, setIsDark
    }}
    >
        {children}
    </DarkToggleContext.Provider>
  )
}
