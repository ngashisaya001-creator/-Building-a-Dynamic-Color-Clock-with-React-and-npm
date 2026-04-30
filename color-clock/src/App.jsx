//Importing useState to store the currnet time as state
//using useEffects to run the timer when components is loading
import { useState, useEffect } from 'react'

//importing the format function from data-fns
//using fromat() method which will convert the data object code into human readable strings
import { format } from 'date-fns'

//I will import the css for styling
import './App.css'


function App() {

  //these creates a variable called time
//using serTime which will start to call very second to update it

  const [time, setTime] = useState(new Date())

  //using useEffect once when component is loading

  useEffect(() => {
    //using setInterval to make the code to run 1000ms ( in 1 sec)
    const timer = setInterval(() => {
     setTime(newDate()) 

    }, 1000);

    return() => clearInterval(timer)

  }, []) // [] is is empty which meansthat the code will run once on mount only
   
  return(
    <p>{format(time, 'EEEE, MMMM do yyyy - HH:mm:ss')}</p>
  )
}

//Export so main.jsx can use this component
export default App
 
