import React,{useEffect, useState} from 'react'
import EmojiData from './Emoji.json';
// import './App.css';

const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=>{
      const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
  return (
    <div className='App'>
        <div className='top'>
          <h1> ❤️ Emoji Search 😎 </h1>

         <input size="30" type="text" className='inp' placeholder="Search.." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy")}}>
            {emoji.symbol} {emoji.name}
          </div>
        </div>
        )}
      
    </div>
  )
}

export default App