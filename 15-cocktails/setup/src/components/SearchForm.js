import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const refContainer = React.useRef(null);

  const setSearch = (text)=>{
    setSearchTerm(text);
  }

  React.useEffect(()=>{
    refContainer.current.focus();
  }, [])

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e)=>{e.preventDefault();}}>
        <div className="form-control">
          <label htmlFor='name'>Search Your fav cocktail</label>
          <input type="text" id="name" onChange={(e)=>setSearch(e.target.value)} ref={refContainer}></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
