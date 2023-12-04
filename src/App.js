import logo from './logo.svg';
import './styling/App.css';
import Dice from './componets/dice'
import React, {useState, useEffect} from 'react'

function App() {

//state that sets the array generated in allNewDice to state of dieValue
const [dieValue, setDieValue] = useState(allNewDice());

function allNewDice(){
 
 let values=[]

  for(let i=0; i<10; i++){
    values.push(Math.ceil(Math.random()*6))
  }

  return values
}

// map through dieValue (array of nums generated in allNewDice) and sets the vale of Dice to that number.
let diceNum = dieValue.map(num =>
  
  <Dice 
    
    value= {num}
  />
)

  


  return (
    <div className="App">
      <div className="inner-box">
        <div className="dice-container">
          {/* calles diceNum to get a dice component and render it.
          since there is only ten numebrs it will render 10x */}
          {diceNum}
        </div>
        <button className='roll-btn'>Roll</button>
      </div>
    </div>
  );
}

export default App;
