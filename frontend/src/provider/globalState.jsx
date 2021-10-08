import { createContext, useState } from "react";

export const StateGlobal = createContext()

export const GlobalState = ({ children }) => {
  const [ state, setState ] = useState({  })
  
  return (
    <StateGlobal.Provider value={{ state, setState }}>
      { children }
    </StateGlobal.Provider>
  )
}