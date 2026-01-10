import './App.css'
import Title from "./Title.jsx";
function Description (){
  return <h3>this is the Description</h3>
}
function App() {
  return (
    
      <div>
        <h1>This is my app component</h1>
        <p>inside app component we have</p>
        <Title/>
        <Description/>
      
      </div>  )
      
}

export default App
