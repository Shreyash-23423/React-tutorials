import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './LudoBoard.jsx'
import TodoList from './TodoList.jsx'
import Lottery from './Lottery.jsx'

function App() {

  return (
    <>
      <div>
        {/* <LudoBoard /> */}
        {/* <TodoList /> */}
        <Lottery />
      </div>
    </>
  )
}

export default App
