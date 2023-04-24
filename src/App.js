import React, { useState } from 'react'
import './app.css';
const App = () => {
  let [value,setValue] = useState(0);

  const handleClick=(e)=>{
    if(e.target.name==='increment'){
      value+=1;
    }
    else{
      if(value<1){
        value=value;
      }
      else{
      value-=1;
      }
    }
    setValue(value);
  }

  return (
    <div className='app'>
        <div className='counter'>
            <h1>{value}</h1>
        </div>
        <div className='buttons'>
          <button onClick={handleClick} name='increment' value={value}>+</button>
          <button onClick={handleClick} name='decrement' value={value}>-</button>
        </div>
    </div>
  )
}

export default App

