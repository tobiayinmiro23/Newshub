import React, { createContext, useState } from 'react'
import { generalContextI } from '../types'

export const appContext = createContext<generalContextI | null>(null)

const Context = ({ children }: { children: React.ReactNode; }) => {
    const [country, setcountry] = useState<string>('ng')
    const [countryFlag, setcountryFlag] = useState<string>('image/nigeria.png')
    const [page, setpage] = useState<string>('')

    return (
        <appContext.Provider value={{ country, setcountry, countryFlag, setcountryFlag, page, setpage }}>
            {children}
        </appContext.Provider>
    )
}
export default Context