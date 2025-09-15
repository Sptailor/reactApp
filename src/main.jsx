import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Greeting from "./Greeting.jsx";
import Person from './Person.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    { <Greeting/> }
    {/* { < App/> } */}
    <Person/>

    
  </StrictMode>,
)
