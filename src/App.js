import logo from './logo.svg';
import './styling/App.css';
import Dice from './componets/dice'

function App() {
  return (
    <div className="App">
      <div className="inner-box">
        <div className="dice-container">
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
        </div>
      </div>
    </div>
  );
}

export default App;
