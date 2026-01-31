import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './LudoBoard.jsx'
import TodoList from './TodoList.jsx'
import Lottery from './Lottery.jsx'
import Ticket from './Ticket.jsx'

function App() {

  return (
    <>
      <div>
        {/* <LudoBoard /> */}
        {/* <TodoList /> */}
        {/* <Lottery /> */}
        <Ticket ticket={[4, 5, 6]} />
        <Ticket ticket={[4, 5, 6,4,6 ]} />
      </div>
    </>
  )
}

export default App
