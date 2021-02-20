import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({list,removeItem,setEdit}) => {
  return (
    <div className="grocery-list">
      {list.map(item=>{
        const {id, text} = item;
        return (
          <article className="grocery-item" key={id} onClick={()=>setEdit(item)}>
            <p className='title'>{text}</p>
            <div className="btn-container">
              <button
              type="button"
              className="edit-btn"
              onClick={()=>setEdit(item)}
              ><FaEdit /></button>
              <button
              type="button"
              className="delete-btn"
              onClick={()=>removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}

    </div>
    
  )
}

export default List
