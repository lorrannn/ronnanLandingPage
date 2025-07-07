import './App.css';
import { FirstSlide } from './components/FirstSlide';
import { FourthSlide } from './components/FourthSlide';
import { SecondSlide } from './components/SecondSlide';
import { ThirdSlide } from './components/ThirdSlide';


function App() {
  return (
    <div className="App">
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
    </div>
  );
}

export default App;
