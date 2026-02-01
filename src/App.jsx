import './App.css'
import LudoBoard from './LudoBoard.jsx'
import TodoList from './TodoList.jsx'
import Lottery from './Lottery.jsx'

function App() {

  return (
    <>
      <>
        {/* <LudoBoard /> */}
        {/* <TodoList /> */}
        {/* <Lottery /> */}
        <Lottery n={3} winningsum={15}/>
      </>
    </>
  )
}

export default App
