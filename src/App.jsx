import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Notebook Gamer Asus TUF FX516" />
    </>
  )
}

export default App
