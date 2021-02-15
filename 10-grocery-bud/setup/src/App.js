import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import SingleColor from './SingleColor'

function App() {
  
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState([]);

  const handleSubmit = (e)=> {
    e.preventDefault();
    try{
    let colors = new Value(color).all(10);
      setList(colors);
    }catch(error){
      setError(true);
    }
  }

  return (
    <>
      <section class="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={color} 
          onChanage={(e)=>setColor(e.target.value)} 
          placeholder='#f15025'
          className={`${error?error: null}`} />
        </form>
      </section>
      <section class="colors">
        {list.map((item,index)=>{
          return <SingleColor key={index} {...item} index={index}></SingleColor>
        })}
      </section>
    </>
  );
  
}

export default App
