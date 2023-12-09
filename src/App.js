import logo from './logo.svg';
import './styling/App.css';
import Dice from './componets/dice'
import React, {useState, useEffect} from 'react'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function App() {

//state that sets the array generated in allNewDice to state of dieValue
const [dieValue, setDieValue] = useState(allNewDice());
const [tenzies, setTenzies] = useState(false);


  useEffect(() => {
     const allHeld = dieValue.every(die => die.isHeld)
     const allEqual = dieValue.every(die => die.Value === dieValue[0].Value)

     if (allHeld && allEqual){
      setTenzies(true)
     }
    },[dieValue]);

//generate a random object with value, isHeld, and an id
function generateNewDie(){
  return {
      value: Math.ceil(Math.random()*6),
      isHeld : false,
      id: nanoid()
    }

}

//take random object from generateNewDie and push it to values 10x
function allNewDice(){
 let values=[]
  for(let i=0; i<10; i++){
    values.push(generateNewDie())
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

//function that calls called generateNewDice and set's unheld die new values to state
function rollDice (){
  setDieValue( prevDieValue =>
     prevDieValue.map((die) => {
  
      return die.isHeld? die : generateNewDie()
      
      }
    )
  
  )
}

//map through dieValue and check if die.id matches that die, if yes switch it's value to the opposite
function holdDice(id){
  setDieValue((prevDieValue)=>{

    return prevDieValue.map((die) => {

      if (die.id === id){
       return {
       ...die,
        isHeld : !die.isHeld
        }
      }else{
       return die
      }
    });
  });
}


  return (
    <div className="App">
      <div className="inner-box">
      {tenzies ? <Confetti/>: ' '}
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {/* calles diceNum to get a dice component and render it.
          since there is only ten numebrs it will render 10x */}
          {diceNum}
        </div>
        <button className='roll-btn' onClick={rollDice}>{tenzies? "New Game" : "Roll"}</button>
      </div>
    </div>
  );
}

export default App;
