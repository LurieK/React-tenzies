import logo from './logo.svg';
import './styling/App.css';
import Dice from './componets/dice'
import React, {useState, useEffect} from 'react'
import {nanoid} from "nanoid"

function App() {

//state that sets the array generated in allNewDice to state of dieValue
const [dieValue, setDieValue] = useState(allNewDice());

function allNewDice(){
 let values=[]

  for(let i=0; i<10; i++){
    values.push({
      value: Math.ceil(Math.random()*6),
      isHeld : false,
      id: nanoid()
    })
  }
  return values
}
// map through dieValue (array of nums generated in allNewDice) and sets the vale of Dice to that number.
let diceNum = dieValue.map(die =>
  <Dice 
    value= {die.value}
    held= {die.isHeld}
    key= {die.id}
    holdDice = {() => holdDice(die.id)}
    
  />
)

//function that calls allNewDice and changes state to the new dice
function rollDice (){
  setDieValue(allNewDice())
}

function holdDice(id){
  console.log(id)
}


  return (
    <div className="App">
      <div className="inner-box">
        <div className="dice-container">
          {/* calles diceNum to get a dice component and render it.
          since there is only ten numebrs it will render 10x */}
          {diceNum}
        </div>
        <button className='roll-btn' onClick={rollDice}>Roll</button>
      </div>
    </div>
  );
}

export default App;
