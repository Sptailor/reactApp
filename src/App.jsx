


import './App2.css'

function ListItem(props) {
  return <li>{props.animal}</li>//displays each animal in a list item
}

function List(props) {//receives an array of animals as props
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;//key is needed for react to identify each item uniquely
      })}
    </ul>
  );
}

function App() {//main component
  const animals = ["Lion", "Cow", "Snake", "Lizard","Goats", "Elephant", "Tiger", "Monkey", "Dog", "Cat"];//array of animals


  return (//main component return
    <div>
    
      <h1>Welcome to the Animal List</h1>
      <p>Here is a list of animals:</p>
      <List animals={animals} /> 

   
    
      <p>Thank you for visiting!</p>
      <p>Goodbye!</p>
     


    </div>
  );
}


export default App
