import './App.css'
import Title from "./Title.jsx";
import ProductTab from './ProductTab.jsx';
import Msgbox from './Msgbox.jsx';

let name ="Kakashi Hatake"
function App() {
  return (
    
      <div>
        <p>Hi,I am {name.toUpperCase()}</p>
        <Msgbox username="Naruto" textcolor="orange"/>
        <h1>This is my app component</h1>
        <p>inside app component we have</p>
        <Title/>
        <ProductTab/>
      
      </div>  )
      
}

export default App;
