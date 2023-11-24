import React from 'react'
import { useState, useEffect } from 'react';
import './Search.css'


export const Searchbar = () => {
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          setFdata(data);
        })
        .catch(err => console.log(err));
    
      },[])
      const [data,setData]= useState([]);
      const [fdata,setFdata] = useState([])
    
      const onchange= (value)=>{
      
        const res =fdata.filter(f=>f.name.toLowerCase().includes(value))
        setData(res);
        if(value === ""){
          setData([]);
        }
    
      
      
        
      }
  return (
    <div className="App">
    <div className='search'>
      <div>
        <input type="text" placeholder="Search" onChange={e=>onchange(e.target.value)}/>
        <button>Search</button>
      </div>
      <div className='dropdown'>
        {
         data.map((d,i)=>(
         <div key={i}>
          {d.name} 
         </div>

         ))
        }


      </div>
    </div>
  </div>
  )
}
