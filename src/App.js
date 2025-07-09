import './App.css';
import { ContactComponent } from './components/ContactComponent';
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
      <ContactComponent/>
    </div>
  );
}

export default App;
