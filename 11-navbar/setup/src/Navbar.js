import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLink,setShowLink] = useState(false);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundedClient;
    if(showLinks){
      linksContainerRef.current.style.height=`${linksHeight}px`;
    }else{
      linksContainerRef.current.style.height='0px';
    }
  }, [showLink]);

  return(
    <nav className="nav-center">
      <div className="nav-header">
          <img src={logo} alt="logo"></img>
          <button className="nav-toggle" onClick={()=>setShowLink(!showLink)}>
            <FaBars />
          </button>
      </div>
      <div className="links-container show-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map(link=>{
            const {id,url,text} = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map(socialIcon=>{
          const {id,url,icon} = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Navbar
