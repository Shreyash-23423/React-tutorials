import './App.css'
import LudoBoard from './LudoBoard.jsx'
import TodoList from './TodoList.jsx'
import Lottery from './Lottery.jsx'

function App() {

  let winconditions = (ticket) => {
    return sum(ticket)===15;
  };
  return (
    <>
      <>
        {/* <LudoBoard /> */}
        {/* <TodoList /> */}
        {/* <Lottery /> */}
        <Lottery n={3} wincondition={winconditions} />
      </>
    </>
  )
}

export default App
