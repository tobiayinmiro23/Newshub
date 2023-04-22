import React,{useContext,createContext} from 'react'
import { Children } from 'react'
export let a=createContext()

function Wrapper({children}) {
  return (
  <a.Provider value='mine'>
    {children}
  </a.Provider>
  )
}

export default Wrapper