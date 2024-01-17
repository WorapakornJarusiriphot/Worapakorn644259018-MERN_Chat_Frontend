import { useState } from 'react'
//import './App.css'
import Routes from './Routes'
import { UserContextProvider } from './context/UserContext'
import axios from 'axios'

function App() {
  axios.defaults.baseURL = "http://localhost:4000"
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes/>
    </UserContextProvider>
  )
}

export default App
