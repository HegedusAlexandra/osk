import React from 'react'
import Dropdown from './Dropdown'
import FilterWindow from './FilterWindow'

export default function Filter({filteredProducts,setFilteredProducts}) {
  return (
    <div className='flex flex-row w-[100%] pt-[10vh] pb-[2vh] h-[4vh]'>
    <div className='flex justify-start w-[50%] h-[4vh]'>
        <FilterWindow filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
    </div>
    <div className='flex justify-end w-[50%] h-[4vh] pr-[1vw]'>
        <Dropdown type={'sort'} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
    </div>
    </div>
  )
}
