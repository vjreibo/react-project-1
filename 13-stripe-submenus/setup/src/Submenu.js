import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'

const Submenu = () => {
  const {isSubmenuOpen, location, page:{page,links}} = useGlobalContext();
  const container = useRef(null);
  const [columns,setColumns] = useState('col-2')

  useEffect(()=>{
    const {center,bottom} = location;
    const submenu = container.current;
    submenu.style.left = `${center}px`;
    submenu.style.bottom = `${bottom}px;`;
    setColumns('col-2');
    if(links.length===3){
      setColumns('col-3');
    }else if(links.length > 3){
      setColumns('col-4');
    }
  }, [location])

  return(
    <aside className={`${isSubmenuOpen?'submenu show':'submenu'}`} ref={container}>
          <section>
            <h4>{page}</h4>
            <div className={`submenu-center ${columns}`}>
              {links.map((link,index)=>{
                const {url, icon, label} = link;
                return(
                  <a key={index} href={url}>
                    {icon}
                    {label}
                  </a>
                )
              })}
            </div>
          </section>
    </aside>
  )
}

export default Submenu
