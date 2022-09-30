import React, { createContext, useState } from 'react'

export const LanguageContext = createContext(null)

const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('ru')
    const updateCurrentLanguage = (value) => {
        setCurrentLanguage(value)
    }

    return (
        <LanguageContext.Provider value={{ currentLanguage, updateCurrentLanguage }}>{children}</LanguageContext.Provider>
    )
}

export default LanguageProvider