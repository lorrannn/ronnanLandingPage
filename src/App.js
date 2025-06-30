import './App.css';
import { FirstSlide } from './components/FirstSlide';
import { SecondSlide } from './components/SecondSlide';
import { ThirdSlide } from './components/ThirdSlide';


function App() {
  return (
    <div className="App">
      <FirstSlide></FirstSlide>      
      <SecondSlide></SecondSlide>
      <ThirdSlide></ThirdSlide>
    </div>
  );
}

export default App;
