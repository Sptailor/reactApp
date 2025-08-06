import { useState } from 'react'

import './App.css'

function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard","Goats", "Elephant", "Tiger", "Monkey", "Dog", "Cat"];


  return (
    <div>
    
      <h1>Welcome to the Animal List</h1>
      <p>Here is a list of animals:</p>
      <List animals={animals} /> 

   
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
      <p>Enjoy the list!</p>
      <p>Have a great day!</p>
      <p>Feel free to explore more!</p>
      <p>Thank you for visiting!</p>
      <p>Goodbye!</p>
     


    </div>
  );
}


export default App
