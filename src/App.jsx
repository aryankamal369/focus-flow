import React, { createContext, useState } from 'react'
import AppRoutes from './Routes/AppRoutes'

export let UserContext = createContext();

const App = () => {

  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <AppRoutes/>
    </UserContext.Provider>
  )
}

export default App
