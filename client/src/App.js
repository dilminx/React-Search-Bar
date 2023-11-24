
import { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue]= useState();
  const [data,setdData] = useState([])
  const onchange= async(e)=>{
setValue(e.target.value)
const response = await fetch('https://jsonplaceholder.typicode.com/posts')
const data =await response.json()
setdData(data)
}
  return (
    <div className="App">
      <div className='search'>
        <div>
          <input type="text" placeholder="Search" onChange={onchange} value={value}/>
          <button>Search</button>
        </div>
        <div className='dropdown'>
          {
            value &&
            data.filter(item=>item.title.startsWith(value)&& item.title !== value)
            .map(item => <div key={item.id} onClick={(e)=>setValue(item.title)}>{item.title}<hr/>
            </div>)
          }


        </div>
      </div>
    </div>
  );
}

export default App;
