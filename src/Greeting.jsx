
import React from 'react';
const colorArray = ['red', 'blue', 'green', 'yellow', 'purple'];//array of colors
let index = 0;//starts at 0
function Helloworld() {
 const [color, setColor] = React.useState(colorArray[index]);//uses it once to set initial color
 
 const clickHandler = () => {
    index = (index + 1) % colorArray.length;
    setColor(colorArray[index]);
 }

 

  return <h1 style={{ color: color }} onClick={clickHandler}>"Hello, World!"</h1> ;


}

function Greeting(){
   return (<div>
    <Helloworld />;


<h1>Test title</h1>
<p>This is a test paragraph.</p>

<p>Welcome to the Greeting component!</p>
    </div>);
}

export default Greeting;