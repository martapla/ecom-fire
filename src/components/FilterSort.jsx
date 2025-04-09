import React from 'react'

const FilterSort = ({ handleFilter}) => {

  return (
    <>
    <div className="filter-btn">
      <button onClick={()=>handleFilter('indoor')}>🌿 Indoor</button>
      <button  onClick={()=>handleFilter('outdoor')}>🌞 Outdoor</button>
      <button onClick={()=>handleFilter(null)}>🌱 All</button> {/* //null = falsy */}
    </div>
    </>
  )
}

export default FilterSort