import './App.css';
import {useState} from 'react';

function App() {

const [search, setSearch] = useState('')


let myData = [{first_name : "Bob", last_name : "smarts", email : "bob@gmail.com"}, 
  {first_name : "Angela", last_name : "fix", email : "angela@gmail.com"},
  {first_name : "Markus", last_name : "Brown", email : "markus@gmail.com"},
  {first_name : "Kevin", last_name : "Hustle", email : "kevin@gmail.com"},
  {first_name : "Anthony", last_name : "Tall", email : "anthony@gmail.com"}       ]




  return (
    <div className="App">
          <input type="text" placeholder="Search...." className='style' onChange={(e)=>{setSearch(e.target.value)}}/>
          {myData.filter((value)=>{
            if (search == "") {
              return value
            }
            else if (value.first_name.toLowerCase().includes(search.toLowerCase())) {
              return value
            }
          }).map((value, index)=>{
            return <div key={index}><h4>{value.first_name}</h4></div>
          })}
</div>
  );
}

export default App;
