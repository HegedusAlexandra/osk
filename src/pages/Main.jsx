import React, { useEffect,useState } from 'react'
import Landing from './Landing'
import Menu from '../components/Menu'
import Contact from './Contact'

export default function Main() {



useEffect(() => console.log(window.scrollY),[window.scrollY > 700])
const [data, setData] = useState([]);

const getData = () => {
    fetch("languages.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson['en']);
        setData(myJson['en']);
      });
  };

useEffect(() => getData(),[])

  return (
    <div className='absolute z-2 w-[100%] h-[500vh] bg-transparent'>
        <Menu />
        <Landing/>
       {/*  <Contact data={data || []}/> */}
    </div>
  )
}
