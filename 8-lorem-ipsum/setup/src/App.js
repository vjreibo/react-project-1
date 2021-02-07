import React, { useState } from 'react';
import data from './data';
function App() {
  const [paragraphs,setParagraphs] = useState([]);
  const [count,setCount] = useState(0);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    let temp = count;
    if(count <= 0){
      temp = 0;
    }
    else if(count > 8){
      temp = 8;
    }
    setParagraphs(data.slice(0,temp));
  }

  return (
      <section className='section-center'>
        <h3>Tired?</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label labelFor='amount'>paragraphs: </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e)=>setCount(e.target.value)}
          >
          </input>
          <button className='btn'>generate</button>
        </form>
        <article className='lorem-text'>
        {paragraphs.map((paragraph,index)=>{
            return <p key={index}>{paragraph}</p>;
          })}
        </article>
        
      </section>
    )
}

export default App;
