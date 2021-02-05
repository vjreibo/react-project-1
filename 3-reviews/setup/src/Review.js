import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index];

  const nextPerson = ()=>{
    setIndex((index)=>{
      if(index < people.length -1)
        return index+1;
      else
        return 0;
    })
  }

  const prevPerson = ()=>{
    setIndex((index)=>{
      if(index > 0)
        return index-1;
      else
        return people.length-1;
    })
  }

  const randomPerson = ()=>{
      let random = Math.floor(Math.random()*people.length);
      if(random === index)
        random++;
      setIndex(random);
  }

  return(
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'></img>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className='random-btn' onClick={randomPerson}>
          Surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
