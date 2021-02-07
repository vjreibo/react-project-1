import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people,setPeople] = useState(data);
  const [index,setIndex] = useState(0);

  useEffect(()=>{
    let slider = setInterval(()=>{
      setNext();
    },3000);
    return ()=>{
      clearInterval(slider);
    }
  }, [index])

  const setNext = ()=>{
    setIndex((prevIndex)=>{
      if(prevIndex >= people.length-1){
        return 0;
      }
      else{
        return prevIndex+1;
      }
    })
  }

  const setPrev = ()=>{
    setIndex((prevIndex)=>{
      if(prevIndex === 0){
        return data.length - 1;
      }else{
        return prevIndex - 1;
      }
    })
  }

  return(
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person,personIndex)=>{
          const {id,image,name,title,quote} = person;
          let position = 'nextSlide'
          if(index === personIndex ){
            position = 'activeSlide';
          }
          else if(personIndex === index-1 || (index === 0 && personIndex === people.length-1)){
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={setPrev}><FiChevronLeft /></button>
        <button className="next" onClick={setNext}><FiChevronRight /></button>
      </div>
    </section>
    
  );
}

export default App;
