import React from 'react'
import Dropdown from './Dropdown'
import FilterWindow from './FilterWindow'

export default function Filter() {
  return (
    <div className='flex flex-row w-[100%] pt-[10vh] md:pb-[2vh] pb-[4vh] h-[4vh]'>  
        <FilterWindow />
        <Dropdown type={'sort'} />
    </div>
  )
}
