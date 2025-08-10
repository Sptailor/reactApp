import { useState } from 'react'

import './Person.css'

function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
 

  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
   
  };
  //Using destructuring to update specific parts of a string
  const handleFirstName = (e) => {
    const [, lastName = ""] = person.name.split(" "); // ignore first name, keep last
    const newPerson = { ...person, name: e.target.value + " " + lastName };
    setPerson(newPerson);
  };

  const handleLastName = (e) => {
    const [firstName = ""] = person.name.split(" "); // keep first name
    const newPerson = { ...person, name: firstName + " " + e.target.value };
    setPerson(newPerson);
  };



 console.log("during render: ", person);
  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
       <input type="text" onChange={handleFirstName} placeholder="First Name" />
      <input type="text" onChange={handleLastName} placeholder="Last Name" />
    </>
  );
}

export default Person;
