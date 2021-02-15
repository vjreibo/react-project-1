import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hex}) => {
  const [alert,setAlert] = useState(false);
  const color = rgb.join(',');
  const hexValue = `#${hex}`.toUpperCase();

  useEffect(()=>{
    const timeout = setTimeout(()=>{setAlert(false);},1000)
    return ()=>{
      clearTimeout(timeout);
    };
  },[alert])

  console.log(alert);


  return (
    <article 
      className={`color ${index>10 && 'color-light' }`} 
      style={{background:`rgb(${color})`}}
      onClick={()=>{
        navigator.clipboard.writeText(hexValue);
        setAlert(true);
      }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p>copied to clipped board.</p>}
    </article>
  );
}

export default SingleColor
